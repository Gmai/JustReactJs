class HelloWorldComponent extends React.Component {
	render () {
		return (
			<p>Hello, {this.props.greetTarget}!</p>
		);
	}
}