class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Calculator/>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('app')
);