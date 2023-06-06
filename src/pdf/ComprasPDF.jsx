import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { TodoFunctions } from "../apis/ApiData";
import moment from "moment-with-locales-es6";
moment.locale("es");
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFF",
  },
  section: {
    margin: 2,
    padding: 10,
  },
  header: {
    marginBottom: 1,
    fontSize: 20,
    width: 250,
    fontWeight: "bold",
    textAlign: "start",
  },
  sectionTitle: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 1,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderWidth: 0,
    borderColor: "#fff",
    padding: 3,
    borderRightWidth: 1,

    display: "block",
    fontSize: 10,
    width: "30.33%",
  },
});

export const ComprasPDF = ({ ventas, totalesProducts }) => {
  const [productos, setProductos] = useState([]);
  const [cliente, setCliente] = useState([]);
  if (ventas.length === 0) return null;
  
  if (totalesProducts.length === 0) return null;
  
  const total = totalesProducts.reduce((a, b) => a + b.total, 0);

  return (
    
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          // display flex is only for web
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#FFFF",
            padding: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#FFFF",
              padding: 10,
              width: "400px",
            }}
          >
            <Text style={styles.header}>{ventas[0].nombre}</Text>
            <Text style={styles.sectionTitle}>Datos del emisor:</Text>

            <Text style={styles.text}>
              Nombre Comercial: {ventas[0].nombre}
            </Text>
            <Text style={styles.text}>NIT:{ventas[0].nit} </Text>
            <Text style={styles.text}>
              Tipo de persona: {ventas[0].tipoPersona}{" "}
            </Text>
            <Text style={styles.text}>
              Identificación: {ventas[0].tipoIdentificacion} -{" "}
              {ventas[0].numero}
            </Text>
            <Text style={styles.text}>Email: {"example@gmail.com"}</Text>
            <Text style={styles.text}>Telefono: {ventas[0].telefono}</Text>
            <Text style={styles.text}>Dirección: {ventas[0].direccion}</Text>
            <Text style={styles.text}>
              Ciudad,Depart: {ventas[0].departamento} - {ventas[0].ciudad}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#FFFF",
              padding: 10,
              width: "350px",
            }}
          >
            <Text style={styles.sectionTitle}>Más información</Text>
            <Text style={styles.text}>Nombre: {ventas[0].nombreCliente}</Text>
            <Text style={styles.text}>
              Representación Gráfica Autorización Numeración de Facturación
              Electrónica No. 18764042401530 de{" "}
              {moment().subtract(10, "days").calendar()} - 03/01/2024 autoriza
              FV-1 a FV-5000
            </Text>
            <Image
              style={{ width: 110, height: 110 }}
              source={{
                uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ventas[0]._id}`,
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Productos:</Text>
          <View style={styles.table}>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FFFF",
                borderBottomWidth: 2,
                borderBottomColor: "#000",
                borderTopWidth: 2,
                borderTopColor: "#000",
                padding: 2,
              }}
            >
              <Text style={[styles.tableCell, styles.text]}>No.</Text>
              <Text style={[styles.tableCell, styles.text]}>Nombre</Text>

              <Text style={[styles.tableCell, styles.text]}>Cantidad</Text>

              <Text style={[styles.tableCell, styles.text]}>Total</Text>
              <Text style={[styles.tableCell, styles.text]}>Fecha</Text>
            </View>

            {totalesProducts.map((item, i) => (
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.text]}>{i + 1}</Text>
                <Text style={[styles.tableCell, styles.text]}>
                  {item.nameProduct}
                </Text>
                <Text style={[styles.tableCell, styles.text]}>
                  {item.unidades}
                </Text>
                <Text style={[styles.tableCell, styles.text]}>
                  {("$ " + item.total).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"
                  )}
                </Text>
                <Text style={[styles.tableCell, styles.text]}>
                  {moment(item.createdAt).format("D MMMM YYYY, h:mm:ss a")}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.table}>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FFFF",

                borderTopWidth: 1,
                borderTopColor: "#777777",
                padding: 2,
              }}
            >
              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}></Text>

              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}>total </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}></Text>
              <Text style={[styles.tableCell, styles.text]}>
                {("$ " + total).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Firma</Text>
          <Text style={styles.sectionDescription}>
            _________________________________________________________
          </Text>
          <Text style={styles.sectionDescription}>Nombre: </Text>
          <Text style={styles.sectionDescription}>C.C: </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aclaración de firma</Text>
          <Text style={styles.sectionDescription}>
            _________________________________________________________
          </Text>
          <Text style={styles.sectionDescription}>Nombre: </Text>
          <Text style={styles.sectionDescription}>C.C: </Text>
        </View>
      </Page>
    </Document>
  );
};
