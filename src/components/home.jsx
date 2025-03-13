import {Button, ButtonGroup} from "react-bootstrap";

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <ButtonGroup aria-label="Basic example" style={{
                width: '60%',
                height: '60%',
                background: 'rgba(255, 255, 255, 0.0)',
                borderRadius: '8px',
                padding: '10px'
            }}>
                <Button variant="secondary" href="/details/menu">
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <span role="img" aria-label="menu">📋</span>
                        MENU
                    </div>
                </Button>
                <Button variant="secondary" href="/details/stores">
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <span role="img" aria-label="stores">🏬</span>
                        STORES
                    </div>
                </Button>
                <Button variant="secondary" href="/details/cart">
                    <div style={{display: 'grid', placeItems: 'center'}}>
                        <span role="img" aria-label="cart">🛒</span>
                        CART
                    </div>
                </Button>
            </ButtonGroup>
        </div>
    );
}
