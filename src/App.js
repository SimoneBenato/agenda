import Navbar from './components/navbar';
import Card from './components/card';
import React, { Component } from 'react';

class App extends Component {
  state = {                                   // questo oggetto js permette di salvare i dati da passare nel ciclo card
    cards: [
      {id:0, titolo:'Andare in palestra', descrizione:'Ricordati di alternare scheda A e cheda B', quantità: 0},
      {id:1, titolo:'Coding', descrizione:'Ricordati di unire pratica e teoria', quantità: 0},
      {id:2, titolo:'Andare a fare la spesa', descrizione:'Ricordati di controllare dieta e frigo', quantità: 0},
      {id:3, titolo:'Faccende domestiche', descrizione:'Stirare e passare pavimenti', quantità: 0}
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id!== cardId);  //questa funzione crea una nuova lista escludendo la card selezionata
    this.setState({cards});    //questo è il metodo base per cambiare una costante, la si richiama, la si aggiorna e la si passa modificata con setState
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità++;
    this.setState({cards});
  }

  handleIncrese = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità--;
    this.setState({cards});
  }

  render () {                                 //render è fondamentale quando si usano i Class Component e non i Functional Component
    return (
      <>
      <Navbar />
      <div className='container py-3'>
        <div className='row mb-4'>
          <div className='col'>
            <h1>Cosa devi fare oggi?</h1>
          </div>
        </div>
        <div className='row'>
          <h2 className='my-3'>Segna come hai speso ogni ora oggi</h2>
          {this.state.cards.map(card => (     //la funzione map permette di mappare gli elementi all interno del componente nel ciclo, accedendo prima alla lista che si vuole ciclare
            <Card
            key={card.id}                    //react per ciclare i componenti ha bisogno di un identificatore univoco passato tramite prop key
            
            
            onDelete={this.handleDelete}     //in questo modo quando avviene l'azione sul componente figlio viene richiamata la funzione sul componente padre
            onIncrement={this.handleIncrement}
            onIncrese={this.handleIncrese}  
            
            // titolo={card.titolo}
            // descrizione={card.descrizione} 
            // oppure
            card={card}                       //per fare questo su card devo aggiungere .card a this.props poiche non passo più il valore direttamente ma un oggetto
            />                   
          ))}
        </div>
      </div>
      </>  
    );
  }
}

export default App;
