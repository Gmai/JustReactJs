class HelloWorld extends React.Component {
	render () {
		return (
			<p>Hello, {this.props.greetTarget}!</p>
		);
	}
}

ReactDOM.render(
	<div>
		<HelloWorld greetTarget="Batman" />
		<HelloWorld greetTarget="Iron Man" />
		<HelloWorld greetTarget="Nicolas Cage" />
		<HelloWorld greetTarget="Mega Man" />
		<HelloWorld greetTarget="Bono" />
		<HelloWorld greetTarget="Catwoman" />
	</div>,
	document.getElementById('container')
);