import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const [participantsList, setParticipantsList] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (!participantName) return

    if (participantsList.includes(participantName)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome');
    }

    setParticipantsList(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover Participante', `Deseja realmente remover ${name}?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => setParticipantsList(prevState => prevState.filter(participant => participant !== name)) },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native Conference</Text>
      <Text style={styles.eventDate}>Sunday, April 30, 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>No participants</Text>
        )}
      />
    </View>
  );
}
