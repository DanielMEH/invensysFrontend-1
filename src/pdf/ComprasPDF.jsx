import React,{useState,useEffect} from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import {TodoFunctions} from "../apis/ApiData"


const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    width: 250,
    fontWeight: "bold",
    textAlign: "start",
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    textOverflow:"ellipsis",
    overflow:"hidden",
    whiteSpace:"nowrap",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 10,
   
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
   
  },
});

export const ComprasPDF = ({dataTrae =null}) => {
  console.log("fff--real", dataTrae);

 
  

 
  return (
    
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>
            gfgfg
            </Text>
          <Text style={styles.sectionTitle}>Información del cliente:</Text>
          <Text style={styles.text}>Nombre: t</Text>
          <Text style={styles.text}>Dirección: t</Text>
          <Text style={styles.text}>Teléfono: t</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Productos:</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.text]}>
                Nombre del producto
              </Text>


              
              <Text style={[styles.tableCell, styles.text]}>Cantidad</Text>
              <Text style={[styles.tableCell, styles.text]}>
                Precio unitario
              </Text>
              <Text style={[styles.tableCell, styles.text]}>Total</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.text]}>Jabon</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
