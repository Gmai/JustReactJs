class TextField extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.state = props;
	}
	handleChangeEmail(ev) {
		this.setState({
			data: { email: ev.target.value }
		});
	}
	render() {
		return (
			<div>
				<input name="Email" value={this.state.data.email} onChange={this.handleChangeEmail} />
			</div>
		);
	}
}

ReactDOM.render(
	<div>
		<div>Text Field</div>
		<TextField data={{ email: "Insert Email" }} />
	</div>,
	document.getElementById('container')
);