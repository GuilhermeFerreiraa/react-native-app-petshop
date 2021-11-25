import React from 'react'
import { SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native'

import styleGlobal from '../../styles'

import Item from './Item'

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.99,
    descricao: 'Não de Banho no seu Gato! Mas se precisar nos ligue'
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.99,
    descricao: 'Uma Dose da vacina V4. Seu gato precisa de duas!'
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.99,
    descricao:
      'Uma dose da Vacina Antirrábica, seu gato precisa de uma por ano!'
  },
  {
    id: 4,
    nome: 'Ração Especial p/ Gatos',
    preco: 199.99,
    descricao:
      'Cuidar da alimentação do gato é cuidar da saúde dele!'
  },
  {
    id: 5,
    nome: 'Brinquedo anti-stress p/ Pets',
    preco: 69.99,
    descricao:
      'Seu pet saudável e relaxado no dia a dia'
  },
  {
    id: 6,
    nome: 'Cama Pet Impermeável',
    preco: 179.99,
    descricao: 'Cama seca e longe de líquidos!'
  },
  {
    id: 7,
    nome: 'Coleira Anti-Pulgas',
    preco: 289.99,
    descricao: 'Elimine as pulgas do seu pet, com a nossa coleira'
  },
  {
    id: 8,
    nome: 'Toca 2x1 Para seu Pet',
    preco: 399.99,
    descricao:
      'A toca que o seu Pet merece!'
  },
  {
    id: 9,
    nome: 'Caminha Iglu p/ Gatos',
    preco: 149.99,
    descricao:
      'O conforto que o seu gato precisa'
  },
  {
    id: 10,
    nome: 'Tapete Higiênico p/ Pets',
    preco: 99.99,
    descricao:
      'Elimine o mal odor, e o trabalho, use o Tapete Higiênico'
  },
]

export default function Servicos() {
  return (
    <SafeAreaView style={styleGlobal.preencher}>
      <KeyboardAvoidingView 
      style={styleGlobal.preencher}
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({id}) => String(id)}
      />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
