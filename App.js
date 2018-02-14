import React from 'react';
import { Font } from 'expo';
import { Madoka } from 'react-native-textinput-effects';
import {AppRegistry, 
				Alert,
				TouchableOpacity, 
				TouchableHighlight, 
				Text, 
				ScrollView, 
				StyleSheet, 
				View, 
				Image, 
				Button, 
				TextInput,} from 'react-native';
import {StackNavigator,} from 'react-navigation';

export default class App extends React.Component {
    render() {
        return (
            <AppNavigation/>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Дискретна математика',
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.containerMenu}>
                <View style={styles.innerConteiner}>
                    <Button
                        onPress={() => navigate('Combinatoric')}
                        title="Комбінаторика"
                        color="#99ccff"
                        //accessibilityLabel="smth"
                    /></View>
                <View style={styles.innerConteiner}>
                    <Button
                        onPress={() => navigate('Graph')}
                        title="Теорія графів"
                        color="#99ccff"
                        //accessibilityLabel="smth"
                    />
                </View>
            </View>
        );
    }
}


//КОМБИНАТОРИКА
class CombiScreen extends React.Component {
    static navigationOptions = {
        title: 'Комбінаторика',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.containerMenu}>
                <ScrollView>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('EnumCombi')}
                            title="Перелічувальна комбінаторика"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        /></View>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('StructCombi')}
                            title="Структурна комбінаторика"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        />
                    </View>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('ExCombi')}
                            title="Екстремальна комбінаторика"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        />
                    </View>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('ProbCombi')}
                            title="Імовірнісна комбінаторика"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        />
                    </View>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('TopCombi')}
                            title="Топологічна комбінаторика"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        />
                    </View>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('InfCombi')}
                            title="Інфінітарная комбінаторика"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

//ТЕОРИЯ ГРАФОВ
class GraphScreen extends React.Component {
    static navigationOptions = {
        title: 'Теорія графів',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.containerMenu}>
                <View style={styles.innerConteiner}>
                    <BigText>Цей розділ ще не готовий</BigText>
                </View>
            </View>
        );
    }
}

//Перечеслительная комбинаторика (enumeration combinatorics menu)
//========================================================================
class EnumCombiScreen extends React.Component {
    static navigationOptions = {
        title: 'Перелічувальна комбінаторика',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.containerMenu}>
                <ScrollView>
                    <View style={styles.innerConteiner}>
                        <Button
                            onPress={() => navigate('Permutations')}
                            title="Перестановки"
                            color="#99ccff"
                            //accessibilityLabel="smth"
                        /></View>
                    
                    
                </ScrollView>
            </View>
        );
    }
}

//Стилизуем текст в перестановках
class BigText extends React.Component {
	render() {
		return (
			<Text style={{fontSize: 20, textAlign: 'justify'}}>{this.props.children}</Text>
			)
	}
}
//Bold text for permutations
class BoldText extends React.Component {
	render() {
		return (
			<BigText>
				<Text style={{fontWeight: 'bold'}}>{this.props.children}</Text>	
			</BigText>
			)
	}
}

class PermInputHandler extends React.Component {
	render() {
		var result = 0;
		result = this.props.x + this.props.y;
		return (
			<View style={{padding: 20,}}>
			<BigText>
				{result}
			</BigText>
			</View>
		)
	}
}

//Перестановки(permutations)
class PermutScreen extends React.Component {
	static navigationOptions = {
        title: 'Перестановки',
    };
	render() {
		const {navigate} = this.props.navigation;
		return (
			//<View>
				//тут обратить внимание на костыль с фигурными скобками(пока только такое решение)
			<View style={styles.container}>
			<ScrollView style={{backgroundColor: '#c2d3ef', flex: 1}}>
				<BigText style={{width: 0, flexGrow: 1, flex: 1}}><BoldText> Визначення. </BoldText> Перестановкою множини з n елементів називається розташування елементів в певному порядку.
Так, всі різні перестановки множини з трьох елементів {'{'} a, b, c \ {'}'} - це abc, acb, bac, bca, cab, cba.
Очевидно, перестановки можна вважати окремим випадком розміщень при m = n>.
Число всіх перестановок з елементів позначається </BigText>
				<Image source={require('./img/Pn.png')} />
				<BigText style={{width: 0, flexGrow: 1, flex: 1}}>
				  (Від початкової букви французького слова "permutation", що означає "перестановка", "переміщення").
Отже, число всіх різних перестановок обчислюється за формулою
			</BigText>
			<Image style={{left: 0, right:0}} source={require('./img/Pn_formula.png')} />
			</ScrollView>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button}
					onPress={() => navigate('PermCalc')}
					>
		    	<BigText>Калькулятор</BigText>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}
					onPress={() => navigate('PermCalc')}
					>
		    	<BigText>Задачі</BigText>
					</TouchableOpacity>
				</View>
			</View>
			)
	}
}
//======================================================

//Структурная комбинаторика // Structural combinatorics

class StructCombiScreen extends React.Component {
	static navigationOptions = {
		title: 'Структурна комбінаторика',
	}
	render () {
		return (
			<View style={styles.container}>
          <View style={styles.innerConteiner}>
            <BigText>Цей розділ ще не готовий</BigText>
          </View>
      </View>
			)
	}
}

//Екстремальная комбинаторика // Extreme Combinatorics

class ExCombiScreen extends React.Component {
	static navigationOptions = {
		title: 'Екстремальна комбінаторика',
	}
	render () {
		return (
			<View style={styles.container}>
          <View style={styles.innerConteiner}>
            <BigText>Цей розділ ще не готовий</BigText>
          </View>
      </View>
			)
	}
}

//Вероятностная комбинаторика // Probabilistic Combinatorics

class ProbCombiScreen extends React.Component {
	static navigationOptions = {
		title: 'Імовірнісна комбінаторика',
	}
	render () {
		return (
			<View style={styles.container}>
          <View style={styles.innerConteiner}>
            <BigText>Цей розділ ще не готовий</BigText>
          </View>
      </View>
			)
	}
}

//Топологическая комбинаторика // Topological combinatorics

class TopCombiScreen extends React.Component {
	static navigationOptions = {
		title: "Топологічна комбінторика",
	}
	render () {
		return (
			<View style={styles.container}>
          <View style={styles.innerConteiner}>
            <BigText>Цей розділ ще не готовий</BigText>
          </View>
      </View>
			)
	}
}

//Инфинитарная комбинаторика // Infinational Combinatorics

class InfCombiScreen extends React.Component {
	static navigationOptions = {
		title: 'Інфінітарна комбінаторика',
	}
	render () {
		return (
			<View style={styles.container}>
          <View style={styles.innerConteiner}>
            <BigText>Цей розділ ще не готовий</BigText>
          </View>
      </View>
			)
	}
}

//---------------------------------------------

class PermCalcScreen extends React.Component {
	static navigationOptions = {
		title: 'Калькулятор перестановок'
	}

	constructor(props) {
    super(props);
    this.state = {text: '',
  								hasFocus: false,
  								placeholderText: ''};
  }
  	updatePlaceholderText= () => {
  		this.setState({placeholderText: 'Введіть n'})
  	}

	render () {
		return (
			<ScrollView style={{margin: 10, flex: 1}}>
				<Madoka
				label={'Число всіх перестановок n елементів'}
				borderColor={'#4286f4'}
				labelStyle={{ color: '#008445' }}
	    	inputStyle={{ color: '#040d2d', fontWeight: 'bold' }}
	    	onFocus = { this.updatePlaceholderText}
	    	placeholder={this.state.placeholderText}
				/>
			</ScrollView>
			)
	}
}

/*class BackgroundImage extends React.Component {
    render() {
        return (
            <ImageBackgound source={require('./img/hero.jpg')}
                   style={styles.backgroundImage}>
                {this.props.children}
            </ImageBackgound>
        )
    }
}*/

const AppNavigation = StackNavigator({
    Home: {screen: HomeScreen},
    Combinatoric: {screen: CombiScreen},
    Graph: {screen: GraphScreen},
    EnumCombi: {screen: EnumCombiScreen},
    Permutations: {screen: PermutScreen},
    ExCombi: {screen: ExCombiScreen},
    ProbCombi: {screen: ProbCombiScreen},
    TopCombi: {screen: TopCombiScreen},
    InfCombi: {screen: InfCombiScreen},
    StructCombi: {screen: StructCombiScreen},
    PermCalc: {screen: PermCalcScreen},
});

const styles = StyleSheet.create({
		permText: {
			fontSize: 15,
		},
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        //backgroundImage: 'url(./img/hero.jpg)',
        //alignItems: 'center',
        padding: 20,
        // flexWrap: 'wrap',
        //justifyContent: 'stretch',
    },
    containerMenu: {
        flex: 1,
        flexDirection: 'column',
        //backgroundImage: 'url(./img/hero.jpg)',
        alignItems: 'center',
        padding: 20,
        // flexWrap: 'wrap',
        //justifyContent: 'stretch',
    },
    img: {
        marginTop: 0,
        alignItems: 'center',
    },
    innerConteiner: {
        width: 300,
        //alignItems: 'stretch',
        padding: 20,
        justifyContent: 'space-between',
    },
    buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    marginBottom: 0,
    backgroundColor: 'grey',
    padding: 0,
    margin: 0,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  	button: {
  	borderRadius: 2,
    backgroundColor: '#a9f9f4',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 0,
  }
});

AppRegistry.registerComponent('App', () => App);