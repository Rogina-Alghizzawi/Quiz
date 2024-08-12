import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { score, timer, totalQuestions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text>Your score: {score} / {totalQuestions}</Text>
      <Text>Time taken: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</Text>
      <Text>{score / totalQuestions >= 0.5 ? 'Success' : 'Failed'}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ResultScreen;
