import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Quiz({ navigation }) {
  const [question, setQuestion] = useState(null);
  const [page, setPage] = useState(0);
  const [allOptions, setAllOptions] = useState(null);
  const [answer, setAnswer] = useState(0);
  const [qNum, setQnum] = useState(1);

  const getData = async () => {
    setAllOptions(null);
    // const url = "https://opentdb.com/api.php?amount=10&category=19&type=multiple";
    // const res = await fetch(url);
    // const parseData = await res.json();
    const parseData = require("../data.json");
    setQuestion(parseData.results[page]);
    setAllOptions([...parseData.results[page].incorrect_answers, ...[parseData.results[page].correct_answer]]);
  };

  useEffect(() => {
    getData();
  }, [page]);
  const nextQuestion = () => {
    setPage(page + 1);
    setQnum(qNum + 1);
  };

  const handleAnswer = (ans) => {
    if (qNum <= 10) {
      if (ans === question.correct_answer) {
        setQnum(qNum + 1);
        setAnswer(answer + 1);
      }
    }

    if (page < 9) {
      nextQuestion();
    }
  };

  return (
    question && (
      <View style={styles.container}>
        <View style={styles.questionButton}>
          <Text style={styles.questionText}>
            Q{page + 1} {question.question}
          </Text>
        </View>

        {allOptions && (
          <View style={styles.option}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleAnswer(allOptions[0])}>
              <Text style={styles.optionText}>{allOptions[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleAnswer(allOptions[1])}>
              <Text>{allOptions[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleAnswer(allOptions[2])}>
              <Text>{allOptions[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleAnswer(allOptions[3])}>
              <Text>{allOptions[3]}</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.bottom}>
          {page !== 9 && (
            <TouchableOpacity style={styles.ActionButton} onPress={nextQuestion}>
              <Text style={styles.ButtonText}>SKIP</Text>
            </TouchableOpacity>
          )}
          {page === 9 && (
            <TouchableOpacity style={styles.ActionButton} onPress={() => navigation.navigate("Result", { result: answer })}>
              <Text style={styles.ButtonText}>Score</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.ActionButton} onPress={() => alert("Please select answer")}>
            <Text style={styles.ButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  questionButton: {
    backgroundColor: "#5499C7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 30,
  },
  questionText: {
    fontSize: 24,
    color: "#EBF5FB",
  },
  option: {
    padding: 16,
    marginVertical: 12,
    flex: 1,
  },
  optionButton: {
    backgroundColor: "#85C1E9",
    padding: 12,
    borderRadius: 10,
    marginVertical: 4,
  },
  bottom: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 20,
  },
  ActionButton: {
    backgroundColor: "#1B4F72",
    padding: 10,
    borderRadius: 10,
  },

  ButtonText: {
    fontSize: 18,
    color: "#EBF5FB",
  },
});
