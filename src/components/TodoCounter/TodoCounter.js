export default function TodoCounter(props){
	return (
		<p style={{ textAlign:'center', fontWeight:'700', margin: '4% 0' }}>Has completado { props.completed } de { props.total } TODOs</p>
	)
}