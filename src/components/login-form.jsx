import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {redirect} from "react-router-dom";

export default function LoginForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };



    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{placeItems: "end", margin: "auto"}}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control type="text" placeholder="Username" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    pattern=".{6,7}"
                />
                <Form.Control.Feedback type="invalid">
                    Password must have six (6) to seven (7) characters.
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" href="/home" variant="primary">
                Login
            </Button>
        </Form>
    )
}