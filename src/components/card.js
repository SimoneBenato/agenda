import React, { Component } from "react";

class Card extends Component {
    render () {
        return(
            <div className="col-6 mb-4">
                <div className="card">
                    <div className="card-body">
                        {<h5 className="card-title">{this.props.card.titolo}</h5>    /* this.props è fontamentale, props perche partono dal padre e arrivano al figlio */}
                        <p className="card-text">{this.props.card.descrizione}</p>
                        <p className="card-text">Eseguito {this.props.card.quantità} volte</p>
                        <div className="d-flex justify-content-between">
                            <button onClick={()=>this.props.onIncrement(this.props.card)} className="btn btn-outline-success">Eseguito con successo</button>
                            <button onClick={()=>this.props.onIncrese(this.props.card)} className="btn btn-outline-warning">Sottrai un'ora</button>
                            <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina Per Oggi</button>
                            {/* react ha bisogno di una arrow function quando ci sono argomenti all interno della funzione altrimenti si può evitare */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Card;