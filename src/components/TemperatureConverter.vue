<template>
    <div class="converter">
      <h1>Convertidor de Temperatura</h1>
      <div class="form-group">
        <input v-model.number="valorEntrada" placeholder="Ingresa el valor" />
        <select v-model="unidadEntrada">
          <option value="celsius">Celsius</option>
          <option value="kelvin">Kelvin</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
        <select v-model="unidadSalida">
          <option value="celsius">Celsius</option>
          <option value="kelvin">Kelvin</option>
          <option value="fahrenheit">Fahrenheit</option>
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
        unidadEntrada: 'celsius',
        unidadSalida: 'celsius',
        resultado: 0,
      };
    },
    methods: {
      convertir() {
        let valorEnCelsius;
  
        // Convertir a Celsius
        if (this.unidadEntrada === 'celsius') {
          valorEnCelsius = this.valorEntrada;
        } else if (this.unidadEntrada === 'kelvin') {
          valorEnCelsius = this.valorEntrada - 273.15;
        } else if (this.unidadEntrada === 'fahrenheit') {
          valorEnCelsius = (this.valorEntrada - 32) * 5 / 9;
        }
  
        // Convertir de Celsius a la unidad de salida
        if (this.unidadSalida === 'celsius') {
          this.resultado = valorEnCelsius;
        } else if (this.unidadSalida === 'kelvin') {
          this.resultado = valorEnCelsius + 273.15;
        } else if (this.unidadSalida === 'fahrenheit') {
          this.resultado = (valorEnCelsius * 9 / 5) + 32;
        }
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
  