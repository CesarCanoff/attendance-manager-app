import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginRight: 12,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    height: 56,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#0076c4",
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
