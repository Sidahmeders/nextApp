import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const MyNavBar = () => {

    const getnames = () => {
       console.log("SidoZoldik")
    }

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Link href="/"><Navbar.Brand href="#home">SODIUM!</Navbar.Brand></Link>
            <Nav className="mr-auto">
            <Link href="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link href="/about"><Nav.Link href="#features">About</Nav.Link></Link>
            <Link href="/contact"><Nav.Link href="#pricing">Contact</Nav.Link></Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            <Button onClick={getnames}>get</Button>
            </Form>
        </Navbar>
        </>
    );
}

export default MyNavBar;