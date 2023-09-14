class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    addRow = () => {

    };

    rmRow = () => {

    };

    inputChange = () => {
    };

    selectChange = () => {

    };

    totalCalc = () => {

    };

    render() {
        return (
            <div>
                <button onClick>Aggiungi Riga</button>
                <button onClick>Rimuovi Riga</button>
                
                    <Row
                        key
                        index
                        onInputChange
                        onSelectChange
                    />
               
                <div>
                    Risultato: <span></span>
                </div>
            </div>
        );
    }
}