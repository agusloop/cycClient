import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import cyc from "../assets/image/cyc.jpg";

const Documents = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>CyC Consultoria</Text>
      <Text style={styles.author}>Usuario: Creador de la Cotizacion</Text>

      <Text style={styles.subtitle}>
        Capítulo I: Cotizacion de acerca del Automovil y el Creado a nombre
        de....
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        distinctio facilis sint doloremque nobis nihil minima quos nisi eius
        aliquid. Non aut impedit sed, incidunt quibusdam laudantium adipisci
        placeat. Aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veniam distinctio facilis sint doloremque nobis nihil minima quos
        nisi eius aliquid. Non aut impedit sed, incidunt quibusdam laudantium
        adipisci placeat. Aspernatur. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Veniam distinctio facilis sint doloremque nobis nihil
        minima quos nisi eius aliquid. Non aut impedit sed, incidunt quibusdam
        laudantium adipisci placeat. Aspernatur.
      </Text>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        distinctio facilis sint doloremque nobis nihil minima quos nisi eius
        aliquid. Non aut impedit sed, incidunt quibusdam laudantium adipisci
        placeat. Aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veniam distinctio facilis sint doloremque nobis nihil minima quos
        nisi eius aliquid. Non aut impedit sed, incidunt quibusdam laudantium
        adipisci placeat. Aspernatur. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Veniam distinctio facilis sint doloremque nobis nihil
        minima quos nisi eius aliquid. Non aut impedit sed, incidunt quibusdam
        laudantium adipisci placeat. Aspernatur.
      </Text>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
    backgroundColor: "#19D5C4",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
export default Documents;
