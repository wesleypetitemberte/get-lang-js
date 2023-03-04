export default function RenderList(props) {
    return (
        <section className="render-list">
            <h2>{props.description}</h2>
            <h3>{props.text}</h3>
        </section>
    );
}
