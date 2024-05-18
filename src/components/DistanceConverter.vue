<template>
    <div class="converter">
      <h1>Convertidor de Distancia</h1>
      <div class="form-group">
        <input v-model.number="valorEntrada" placeholder="Ingresa el valor" />
        <select v-model="unidadEntrada">
          <option value="metros">Metros</option>
          <option value="kilometros">Kilómetros</option>
          <option value="centimetros">Centímetros</option>
          <option value="millas">Millas</option>
          <option value="yardas">Yardas</option>
          <option value="pies">Pies</option>
          <option value="pulgadas">Pulgadas</option>
        </select>
        
        <select v-model="unidadSalida">
          <option value="metros">Metros</option>
          <option value="kilometros">Kilómetros</option>
          <option value="centimetros">Centímetros</option>
          <option value="millas">Millas</option>
          <option value="yardas">Yardas</option>
          <option value="pies">Pies</option>
          <option value="pulgadas">Pulgadas</option>
        </select>
      </div>
      <button @click="convertir">Convertir</button>
      <p>Resultado: {{ resultado }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valorEntrada: 0,
        unidadEntrada: 'metros',
        unidadSalida: 'metros',
        resultado: 0,
      };
    },
    methods: {
      convertir() {
        const conversiones = {
          metros: 1,
          kilometros: 0.001,
          centimetros: 100,
          millas: 0.000621371,
          yardas: 1.09361,
          pies: 3.28084,
          pulgadas: 39.3701,
        };
        const valorEnUnidadBase = this.valorEntrada / conversiones[this.unidadEntrada];
        this.resultado = valorEnUnidadBase * conversiones[this.unidadSalida];
      },
    },
  };
  </script>
  
  <style scoped>
  .converter {
    padding: 20px;
    background-color: #1f1f1f;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 500px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    
  }
  
  input, select {
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
  }
  
  button {
    padding: 10px 15px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    margin-bottom: 20px; 
  }
  
  button:hover {
    background-color: #218838;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  
  