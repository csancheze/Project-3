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
          <Col sm={12} md={6} lg={3}>
            <h1 id="app-name">Woofstel</h1>
            {Auth.loggedIn() ? (
              <div>
                {loading ? (
                  <p>loading</p>
                ) : (
                  <p
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "2vh",
                    }}
                  >
                    Welcome {data.me.user.username}!
                  </p>
                )}
              </div>
            ) : (
              <br></br>
            )}
          </Col>
          <Col sm={12} md={6} lg={9}>
            <ul id="nav-options" className="m-0 justify-content-end">
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
                    <div className="d-flex align-items-center">
                      {data.me.user.role === "PetSitter" ? (
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
                <NavLink
                  style={{ color: "white" }}
                  to="/"
                  onClick={() => Auth.logout()}
                >
                  Logout
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
