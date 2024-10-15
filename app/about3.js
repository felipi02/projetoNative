import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const playlists = [
  {
    singer: 'Kiss',
    songs: [
      { id: '1', title: 'Kiss Song 1', file: require('../assets/sound/Kiss.mp3'), image: require('../assets/images/music-5.jpg') },
      { id: '2', title: 'Kiss Song 2', file: require('../assets/sound/Kiss2.mp3'), image: require('../assets/images/music-5.jpg') },
      { id: '3', title: 'Kiss Song 3', file: require('../assets/sound/Kiss3.mp3'), image: require('../assets/images/music-5.jpg') }
    ]
  },
  {
    singer: 'ACDC',
    songs: [
      { id: '1', title: 'ACDC Song 1', file: require('../assets/sound/ACDC.mp3'), image: require('../assets/images/music-2.jpg') },
      { id: '2', title: 'ACDC Song 2', file: require('../assets/sound/ACDC2.mp3'), image: require('../assets/images/music-2.jpg') },
      { id: '3', title: 'ACDC Song 3', file: require('../assets/sound/ACDC3.mp3'), image: require('../assets/images/music-2.jpg') }
    ]
  },
  {
    singer: 'Nirvana',
    songs: [
      { id: '1', title: 'Nirvana Song 1', file: require('../assets/sound/Nirvana.mp3'), image: require('../assets/images/music-3.jpg') },
      { id: '2', title: 'Nirvana Song 2', file: require('../assets/sound/Nirvana2.mp3'), image: require('../assets/images/music-3.jpg') },
      { id: '3', title: 'Nirvana Song 3', file: require('../assets/sound/Nirvana3.mp3'), image: require('../assets/images/music-3.jpg') }
    ]
  }
];

export default function MusicPlayer() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const playSound = async (song) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(song.file);
      setSound(newSound);
      setCurrentSong(song);
      await newSound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error('Erro ao tocar música', error);
    }
  };

  const stopSound = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setIsPlaying(false);
        setCurrentSong(null);
        setSound(null);
      }
    } catch (error) {
      console.error('Erro ao parar música', error);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <TouchableOpacity
          style={[styles.button, isPlaying && currentSong?.id === item.id ? styles.stopButton : styles.playButton]}
          onPress={() => (isPlaying && currentSong?.id === item.id ? stopSound() : playSound(item))}
        >
          <Text style={styles.buttonText}>{isPlaying && currentSong?.id === item.id ? "Parar" : "Tocar"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedPlaylist(item.songs)} style={styles.playlistButton}>
      <Text style={styles.playlistText}>{item.singer}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedPlaylist ? (
        <>
          <TouchableOpacity onPress={() => setSelectedPlaylist(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
          <FlatList
            data={selectedPlaylist}
            renderItem={renderSongItem}
            keyExtractor={item => item.id}
          />
        </>
      ) : (
        <FlatList
          data={playlists}
          renderItem={renderPlaylistItem}
          keyExtractor={item => item.singer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1B1B1C',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  playButton: {
    backgroundColor: '#1B1B1C',
  },
  stopButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  playlistButton: {
    padding: 20,
    backgroundColor: '#444',
    borderRadius: 10,
    marginBottom: 10,
  },
  playlistText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#555',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
