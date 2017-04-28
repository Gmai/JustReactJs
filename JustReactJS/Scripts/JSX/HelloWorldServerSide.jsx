debugger;
ReactDOM.render(
	<div>
		<HelloWorldComponent greetTarget="Batman" />
		<HelloWorldComponent greetTarget="Iron Man" />
		<HelloWorldComponent greetTarget="Nicolas Cage" />
		<HelloWorldComponent greetTarget="Mega Man" />
		<HelloWorldComponent greetTarget="Bono" />
		<HelloWorldComponent greetTarget="Catwoman" />
	</div>,
	document.getElementById('container')
);