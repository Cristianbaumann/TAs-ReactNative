import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Ta1() {
  const [tareas, setTareas] = React.useState([]);
  const [nuevasTarea, setNuevasTareas] = React.useState("");
  const [valor, SetValor] = React.useState(0);

  const incrementar = () => {
    SetValor(valor + 1);
  };
  const decrementar = () => {
    SetValor(valor - 1);
  };
  const reiniciar = () => {
    SetValor(0);
  };

  const onChangeText = (text) => {
    setNuevasTareas(text);
  };

  const agregarTarea = () => {
    setTareas([...tareas, nuevasTarea]);
    setNuevasTareas("");
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Escribe una tarea"
          onChangeText={onChangeText}
          value={nuevasTarea}
          style={styles.input}
        />
        <TouchableOpacity onPress={agregarTarea} style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>

        <FlatList
          data={tareas}
          renderItem={({ item, index }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{item}</Text>
              <TouchableOpacity
                onPress={() => eliminarTarea(index)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <Text>{valor}</Text>
        <TouchableOpacity onPress={incrementar} style={styles.button}>
          <Text style={styles.buttonText}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrementar} style={styles.button}>
          <Text style={styles.buttonText}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reiniciar} style={styles.button}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
