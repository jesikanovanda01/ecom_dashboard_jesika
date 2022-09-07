import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


function Header() {
    let user = JSON.parse(localStorage.getItem("user-info"))
    const history = useHistory();
    function logOut(){
        localStorage.clear(); 
        history.push("/Register");
    }
    console.warn(user);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
                    <Nav className="me-auto navbar-wrapper">
                        {
                            localStorage.getItem('user-info') ? (
                                <>
                                    <Link to="/AddProducts">Add Products</Link>
                                    <Link to="/UpdateProducts">Update Products</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/Login">Login</Link>
                                    <Link to="/Register">Register</Link>
                                </>
                            )
                        }
                    </Nav>
                    {localStorage.getItem('user-info')? (
                    <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.ItemText onClick={logOut}>Logout</NavDropdown.ItemText>
                        </NavDropdown>
                    </Nav>
                    ) : null
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;