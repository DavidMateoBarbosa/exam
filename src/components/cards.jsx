import {
    Row as ReactRow,
    Col as ReactCol,
    Card as ReactCard,
} from "react-bootstrap";


export default function Cards({data}) {
    return (
        <ReactRow xs={1} md={2} className="g-4">
            {data.slice(3, 5).map((data, idx) => (
                <ReactCol key={idx}>
                    <ReactCard>
                        <ReactCard.Img variant="top" src={data.image} alt={data.name}
                                       style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
                        <ReactCard.Body>
                            <ReactCard.Title>{data.name}</ReactCard.Title>
                        </ReactCard.Body>
                    </ReactCard>
                </ReactCol>
            ))}
        </ReactRow>
    );
}
