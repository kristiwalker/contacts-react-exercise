import context from '../context';

class MyProvider extends Component {
    state = {
        contacts: [],
        editing: false,
        editingIndex: ""
    };

    render() {
        return (
            <Context.Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
            {this.props.children}
            </MyContext.Provider>
        );
    }
}
