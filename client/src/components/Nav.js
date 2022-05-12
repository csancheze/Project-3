import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/navbar.css";
import Auth from ".//../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME_PETSITTER } from "../utils/queries";

const Nav = () => {
  const { loading, data } = useQuery(QUERY_ME_PETSITTER);

  return (
    <nav>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <h1 id="app-name">Woofstel</h1>
            {Auth.loggedIn() ? (
              <div>
                {loading ? (
                  <p>loading</p>
                ) : (
                  <p>Welcome {data.me.user.username}</p>
                )}
              </div>
            ) : (
              <br></br>
            )}
          </Col>
          <Col sm={12} md={6} lg={8}>
            <ul id="nav-options" className="m-0">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#83580b",
                        backgroundColor: "#fde994",
                        borderRadius: "10px",
                      }
                    : { color: "white" }
                }
                to="/"
              >
                Home
              </NavLink>
              {Auth.loggedIn() ? (
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#83580b",
                          backgroundColor: "#fde994",
                          borderRadius: "10px",
                        }
                      : { color: "white" }
                  }
                  to="/catalog"
                >
                  Catalog
                </NavLink>
              ) : (
                <br></br>
              )}
              {Auth.loggedIn() ? (
                <div>
                  {loading ? (
                    <p>loading</p>
                  ) : (
                    <div>
                      {data.me.user.role == "PetSitter" ? (
                        <NavLink
                          style={({ isActive }) =>
                            isActive
                              ? {
                                  color: "#83580b",
                                  backgroundColor: "#fde994",
                                  borderRadius: "10px",
                                }
                              : { color: "white" }
                          }
                          to="/profile"
                        >
                          Profile
                        </NavLink>
                      ) : (
                        <NavLink
                          style={({ isActive }) =>
                            isActive
                              ? {
                                  color: "#83580b",
                                  backgroundColor: "#fde994",
                                  borderRadius: "10px",
                                }
                              : { color: "white" }
                          }
                          to="/profile-petowner"
                        >
                          Profile
                        </NavLink>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <br></br>
              )}

              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#83580b",
                        backgroundColor: "#fde994",
                        borderRadius: "10px",
                      }
                    : { color: "white" }
                }
                to="/contact"
              >
                Contact us
              </NavLink>

              {Auth.loggedIn() ? (
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              ) : (
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#83580b",
                          backgroundColor: "#fde994",
                          borderRadius: "10px",
                        }
                      : { color: "white" }
                  }
                  to="/login-user"
                >
                  Login
                </NavLink>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
export default Nav;
