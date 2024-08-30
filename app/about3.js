import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const songs = [
  { id: '1', title: 'Kiss', file: require('../assets/sound/Kiss.mp3'), image: require('../assets/images/music-5.jpg') },
  { id: '2', title: 'ACDC', file: require('../assets/sound/ACDC.mp3'), image: require('../assets/images/music-2.jpg') },
  
];

export default function MusicPlayer() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const playSound = async (song) => {
    try {
      if (sound) {
        await sound.stopAsync();
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
        setIsPlaying(false);
        setCurrentSong(null);
      }
    } catch (error) {
      console.error('Erro ao parar música', error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
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

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
      />
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
});
