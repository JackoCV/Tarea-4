<template>
    <div class="converter">
      <h1>Convertidor de Peso</h1>
      <div class="form-group">
        <input v-model.number="valorEntrada" placeholder="Ingresa el valor" />
        <select v-model="unidadEntrada">
          <option value="kilogramos">Kilogramos</option>
          <option value="gramos">Gramos</option>
          <option value="toneladasMetricas">Toneladas Métricas</option>
          <option value="libras">Libras</option>
          <option value="onzas">Onzas</option>
        </select>
        
        <select v-model="unidadSalida">
          <option value="kilogramos">Kilogramos</option>
          <option value="gramos">Gramos</option>
          <option value="toneladasMetricas">Toneladas Métricas</option>
          <option value="libras">Libras</option>
          <option value="onzas">Onzas</option>
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
        unidadEntrada: 'kilogramos',
        unidadSalida: 'kilogramos',
        resultado: 0,
      };
    },
    methods: {
      convertir() {
        const conversiones = {
          kilogramos: 1,
          gramos: 1000,
          toneladasMetricas: 0.001,
          libras: 2.20462,
          onzas: 35.274,
        };
  
        // Convertir el valor de entrada a kilogramos
        const valorEnKilogramos = this.valorEntrada / conversiones[this.unidadEntrada];
  
        // Convertir de kilogramos a la unidad de salida
        this.resultado = valorEnKilogramos * conversiones[this.unidadSalida];
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
  