import React from "react";
import "../styling/dashboard.css";
import CardComponent from "../components/cardComponent";
import { Card, Grid, Paper, Box } from "@mui/material";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="title">
        <p
          style={{
            color: "#2379CC",
            fontSize: "20px",
            fontWeight: 500,
            paddingTop: "1vh",
          }}
        >
          Welcome Test User!
        </p>
        <p style={{ color: "#979FA6", fontWeight: 500, fontSize: "16px" }}>
          Dashboard
        </p>
      </div>
      <Box>
        <Grid container rowGap={1}>
          <Grid item md={4}>
            <CardComponent
              sx={{
                marginTop: "0vh",
                width: "50.5vh",
                height: "19.7vh",
                boxShadow: "none",
              }}
            >
              <svg
                style={{ position: "relative", top: 120, left: 440 }}
                width="64"
                height="79"
                viewBox="0 0 64 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 50C0 48.8954 0.895431 48 2 48H11C12.1046 48 13 48.8954 13 50V79H0V50Z"
                  fill="#E6F2FF"
                />
                <path
                  d="M17 15C17 13.8954 17.8954 13 19 13H28C29.1046 13 30 13.8954 30 15V79H17V15Z"
                  fill="#E6F2FF"
                />
                <path
                  d="M34 39C34 37.8954 34.8954 37 36 37H45C46.1046 37 47 37.8954 47 39V79H34V39Z"
                  fill="#E6F2FF"
                />
                <path
                  d="M51 2C51 0.895432 51.8954 0 53 0H62C63.1046 0 64 0.895431 64 2V79H51V2Z"
                  fill="#E6F2FF"
                />
              </svg>
              <div className="presentEmployees">
                <svg
                  width="44"
                  height="42"
                  viewBox="0 0 44 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.6994 33.4199C36.0013 30.3085 38.0625 25.8949 38.0625 21C38.0625 11.5766 30.4234 3.9375 21 3.9375C11.5766 3.9375 3.9375 11.5766 3.9375 21C3.9375 25.8949 5.99874 30.3085 9.3006 33.4199C12.3552 36.2984 16.4716 38.0625 21 38.0625C25.5284 38.0625 29.6448 36.2984 32.6994 33.4199ZM10.754 31.1715C13.1593 28.1711 16.8553 26.25 21 26.25C25.1447 26.25 28.8407 28.1712 31.246 31.1715C28.6305 33.8061 25.0058 35.4375 21 35.4375C16.9942 35.4375 13.3695 33.8061 10.754 31.1715ZM27.5625 15.75C27.5625 19.3744 24.6244 22.3125 21 22.3125C17.3756 22.3125 14.4375 19.3744 14.4375 15.75C14.4375 12.1256 17.3756 9.1875 21 9.1875C24.6244 9.1875 27.5625 12.1256 27.5625 15.75Z"
                    fill="#2379CC"
                  />
                  <rect
                    x="26.25"
                    y="24.5"
                    width="17.5"
                    height="17.5"
                    rx="8.75"
                    fill="white"
                  />
                  <path
                    d="M32.8125 33.7969L34.4531 35.4375L37.1875 31.6094M41.5625 33.25C41.5625 36.8744 38.6244 39.8125 35 39.8125C31.3756 39.8125 28.4375 36.8744 28.4375 33.25C28.4375 29.6256 31.3756 26.6875 35 26.6875C38.6244 26.6875 41.5625 29.6256 41.5625 33.25Z"
                    stroke="#2379CC"
                    stroke-width="1.09375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p
                  style={{
                    fontWeight: "600",
                    color: "#011627",
                    fontSize: "20px",
                  }}
                >
                  Present Employees
                </p>
                <p
                  style={{
                    color: "#2379CC",
                    fontWeight: "700",
                    fontSize: "43.08px",
                    position: "relative",
                    top: "-19px",
                  }}
                >
                  35
                </p>
              </div>
            </CardComponent>
          </Grid>
          <Grid item md={4}>
            <CardComponent
              sx={{
                marginTop: "0vh",
                width: "50.5vh",
                height: "19.7vh",
                boxShadow: "none",
              }}
            >
              <svg
                style={{ position: "relative", top: "160px", left: "440px" }}
                width="72"
                height="34"
                viewBox="0 0 72 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="34"
                  rx="17"
                  fill="#C05546"
                  fill-opacity="0.19"
                />
                <path
                  d="M13.25 11L20 17.75L24.2862 13.4638C26.3217 15.0166 27.8781 17.23 28.5919 19.8941L29.3684 22.7919M29.3684 22.7919L32.5504 17.2806M29.3684 22.7919L23.857 19.6099"
                  stroke="#C05546"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.7656 20.0114V18.7685L46.1655 11.8182H47.1449V13.6477H46.5234L43.3764 18.6293V18.7088H49.407V20.0114H41.7656ZM46.593 22V19.6335L46.603 19.0668V11.8182H48.0597V22H46.593ZM56.4542 20.0909V19.554C56.4542 19.1695 56.5337 18.8182 56.6928 18.5C56.8552 18.1785 57.0906 17.9216 57.3988 17.7294C57.7103 17.5339 58.0865 17.4361 58.5273 17.4361C58.9781 17.4361 59.3559 17.5322 59.6609 17.7244C59.9658 17.9167 60.1961 18.1735 60.3519 18.495C60.511 18.8165 60.5906 19.1695 60.5906 19.554V20.0909C60.5906 20.4754 60.511 20.8284 60.3519 21.1499C60.1928 21.468 59.9592 21.7249 59.6509 21.9205C59.346 22.1127 58.9715 22.2088 58.5273 22.2088C58.0799 22.2088 57.7021 22.1127 57.3938 21.9205C57.0856 21.7249 56.8519 21.468 56.6928 21.1499C56.5337 20.8284 56.4542 20.4754 56.4542 20.0909ZM57.6126 19.554V20.0909C57.6126 20.3759 57.6805 20.6345 57.8164 20.8665C57.9523 21.0985 58.1893 21.2145 58.5273 21.2145C58.8621 21.2145 59.0958 21.0985 59.2283 20.8665C59.3609 20.6345 59.4272 20.3759 59.4272 20.0909V19.554C59.4272 19.2689 59.3626 19.0104 59.2333 18.7784C59.1074 18.5464 58.872 18.4304 58.5273 18.4304C58.1959 18.4304 57.9606 18.5464 57.8214 18.7784C57.6822 19.0104 57.6126 19.2689 57.6126 19.554ZM51.3335 14.2642V13.7273C51.3335 13.3428 51.413 12.9898 51.5721 12.6683C51.7345 12.3468 51.9698 12.09 52.2781 11.8977C52.5896 11.7055 52.9658 11.6094 53.4066 11.6094C53.8574 11.6094 54.2352 11.7055 54.5401 11.8977C54.8451 12.09 55.0754 12.3468 55.2312 12.6683C55.387 12.9898 55.4648 13.3428 55.4648 13.7273V14.2642C55.4648 14.6487 55.3853 15.0017 55.2262 15.3232C55.0704 15.6413 54.8384 15.8982 54.5302 16.0938C54.2253 16.286 53.8507 16.3821 53.4066 16.3821C52.9558 16.3821 52.5763 16.286 52.2681 16.0938C51.9632 15.8982 51.7312 15.6413 51.5721 15.3232C51.413 15.0017 51.3335 14.6487 51.3335 14.2642ZM52.4968 13.7273V14.2642C52.4968 14.5492 52.5631 14.8078 52.6957 15.0398C52.8316 15.2718 53.0685 15.3878 53.4066 15.3878C53.738 15.3878 53.9701 15.2718 54.1026 15.0398C54.2385 14.8078 54.3065 14.5492 54.3065 14.2642V13.7273C54.3065 13.4422 54.2418 13.1837 54.1126 12.9517C53.9833 12.7197 53.748 12.6037 53.4066 12.6037C53.0752 12.6037 52.8398 12.7197 52.7006 12.9517C52.5647 13.1837 52.4968 13.4422 52.4968 13.7273ZM51.8058 22L58.8058 11.8182H59.994L52.994 22H51.8058Z"
                  fill="#C05546"
                />
              </svg>

              <div className="absentEmployees">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.6994 33.4199C36.0013 30.3085 38.0625 25.8949 38.0625 21C38.0625 11.5766 30.4234 3.9375 21 3.9375C11.5766 3.9375 3.9375 11.5766 3.9375 21C3.9375 25.8949 5.99874 30.3085 9.3006 33.4199C12.3552 36.2984 16.4716 38.0625 21 38.0625C25.5284 38.0625 29.6448 36.2984 32.6994 33.4199ZM10.754 31.1715C13.1593 28.1711 16.8553 26.25 21 26.25C25.1447 26.25 28.8407 28.1712 31.246 31.1715C28.6305 33.8061 25.0058 35.4375 21 35.4375C16.9942 35.4375 13.3695 33.8061 10.754 31.1715ZM27.5625 15.75C27.5625 19.3744 24.6244 22.3125 21 22.3125C17.3756 22.3125 14.4375 19.3744 14.4375 15.75C14.4375 12.1256 17.3756 9.1875 21 9.1875C24.6244 9.1875 27.5625 12.1256 27.5625 15.75Z"
                    fill="#C05547"
                  />
                  <circle cx="33" cy="9" r="5" fill="#AA3929" />
                </svg>

                <p
                  style={{
                    fontWeight: "600",
                    color: "#011627",
                    fontSize: "20px",
                  }}
                >
                  Absent Employees
                </p>
                <p
                  style={{
                    color: "#AA3929",
                    fontWeight: "700",
                    fontSize: "43.08px",
                    position: "relative",
                    top: "-19px",
                  }}
                >
                  5
                </p>
              </div>
            </CardComponent>
          </Grid>
          <Grid item md={4}>
            <CardComponent
              sx={{
                marginTop: "0vh",
                width: "50.5vh",
                height: "19.7vh",
                boxShadow: "none",
              }}
            >
              <svg
                style={{ position: "relative", top: "160px", left: "440px" }}
                width="72"
                height="34"
                viewBox="0 0 72 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="34"
                  rx="17"
                  fill="#C05546"
                  fill-opacity="0.19"
                />
                <path
                  d="M14.25 11L21 17.75L25.2862 13.4638C27.3217 15.0166 28.8781 17.23 29.5919 19.8941L30.3684 22.7919M30.3684 22.7919L33.5504 17.2806M30.3684 22.7919L24.857 19.6099"
                  stroke="#C05546"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.8423 11.8182V22H45.3011V13.3594H45.2415L42.8054 14.9503V13.4787L45.3459 11.8182H46.8423ZM54.9112 20.0909V19.554C54.9112 19.1695 54.9908 18.8182 55.1499 18.5C55.3123 18.1785 55.5476 17.9216 55.8558 17.7294C56.1674 17.5339 56.5436 17.4361 56.9844 17.4361C57.4351 17.4361 57.813 17.5322 58.1179 17.7244C58.4228 17.9167 58.6532 18.1735 58.8089 18.495C58.968 18.8165 59.0476 19.1695 59.0476 19.554V20.0909C59.0476 20.4754 58.968 20.8284 58.8089 21.1499C58.6499 21.468 58.4162 21.7249 58.108 21.9205C57.803 22.1127 57.4285 22.2088 56.9844 22.2088C56.5369 22.2088 56.1591 22.1127 55.8509 21.9205C55.5426 21.7249 55.3089 21.468 55.1499 21.1499C54.9908 20.8284 54.9112 20.4754 54.9112 20.0909ZM56.0696 19.554V20.0909C56.0696 20.3759 56.1375 20.6345 56.2734 20.8665C56.4093 21.0985 56.6463 21.2145 56.9844 21.2145C57.3191 21.2145 57.5528 21.0985 57.6854 20.8665C57.8179 20.6345 57.8842 20.3759 57.8842 20.0909V19.554C57.8842 19.2689 57.8196 19.0104 57.6903 18.7784C57.5644 18.5464 57.3291 18.4304 56.9844 18.4304C56.6529 18.4304 56.4176 18.5464 56.2784 18.7784C56.1392 19.0104 56.0696 19.2689 56.0696 19.554ZM49.7905 14.2642V13.7273C49.7905 13.3428 49.87 12.9898 50.0291 12.6683C50.1915 12.3468 50.4268 12.09 50.7351 11.8977C51.0466 11.7055 51.4228 11.6094 51.8636 11.6094C52.3144 11.6094 52.6922 11.7055 52.9972 11.8977C53.3021 12.09 53.5324 12.3468 53.6882 12.6683C53.844 12.9898 53.9219 13.3428 53.9219 13.7273V14.2642C53.9219 14.6487 53.8423 15.0017 53.6832 15.3232C53.5275 15.6413 53.2955 15.8982 52.9872 16.0938C52.6823 16.286 52.3078 16.3821 51.8636 16.3821C51.4129 16.3821 51.0334 16.286 50.7251 16.0938C50.4202 15.8982 50.1882 15.6413 50.0291 15.3232C49.87 15.0017 49.7905 14.6487 49.7905 14.2642ZM50.9538 13.7273V14.2642C50.9538 14.5492 51.0201 14.8078 51.1527 15.0398C51.2886 15.2718 51.5256 15.3878 51.8636 15.3878C52.1951 15.3878 52.4271 15.2718 52.5597 15.0398C52.6955 14.8078 52.7635 14.5492 52.7635 14.2642V13.7273C52.7635 13.4422 52.6989 13.1837 52.5696 12.9517C52.4403 12.7197 52.205 12.6037 51.8636 12.6037C51.5322 12.6037 51.2969 12.7197 51.1577 12.9517C51.0218 13.1837 50.9538 13.4422 50.9538 13.7273ZM50.2628 22L57.2628 11.8182H58.451L51.451 22H50.2628Z"
                  fill="#C05546"
                />
              </svg>

              <div className="leaveEmployees">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.6994 33.4199C36.0013 30.3085 38.0625 25.8949 38.0625 21C38.0625 11.5766 30.4234 3.9375 21 3.9375C11.5766 3.9375 3.9375 11.5766 3.9375 21C3.9375 25.8949 5.99874 30.3085 9.3006 33.4199C12.3552 36.2984 16.4716 38.0625 21 38.0625C25.5284 38.0625 29.6448 36.2984 32.6994 33.4199ZM10.754 31.1715C13.1593 28.1711 16.8553 26.25 21 26.25C25.1447 26.25 28.8407 28.1712 31.246 31.1715C28.6305 33.8061 25.0058 35.4375 21 35.4375C16.9942 35.4375 13.3695 33.8061 10.754 31.1715ZM27.5625 15.75C27.5625 19.3744 24.6244 22.3125 21 22.3125C17.3756 22.3125 14.4375 19.3744 14.4375 15.75C14.4375 12.1256 17.3756 9.1875 21 9.1875C24.6244 9.1875 27.5625 12.1256 27.5625 15.75Z"
                    fill="#979FA6"
                  />
                </svg>

                <p
                  style={{
                    fontWeight: "600",
                    color: "#011627",
                    fontSize: "20px",
                  }}
                >
                  On Leave
                </p>
                <p
                  style={{
                    color: "#979FA6",
                    fontWeight: "700",
                    fontSize: "43.08px",
                    position: "relative",
                    top: "-19px",
                  }}
                >
                  2
                </p>
              </div>
            </CardComponent>
          </Grid>
          <Grid item md={8}>
            <CardComponent
              sx={{
                width: "107vh",
                marginTop: "1vh",
                height: "21vh",
                boxShadow: "none",
              }}
            >
              <div className="calenderContainer">
                <div style={{ height: "46px" }} className="date">
                  <p
                    style={{
                      color: "#2379CC",
                      fontWeight: "600",
                      fontSize: "20px",
                      alignSelf: "flex-end",
                    }}
                  >
                    May,2024
                  </p>
                  <span
                    style={{
                      border: "1px solid #F0F0F0",
                      height: "19px",
                      padding: "6px 8px 6px 8px",
                    }}
                  >
                    <p
                      style={{
                        position: "relative",
                        top: "-18px",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      Weekly
                      <svg
                        style={{
                          position: "relative",
                          left: "4px",
                        }}
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.747675 -0.000156197C0.937676 -0.000156213 1.12768 0.0698439 1.27768 0.219844L4.27768 3.21984L7.27768 0.219843C7.56768 -0.0701565 8.04768 -0.0701565 8.33768 0.219843C8.62768 0.509843 8.62768 0.989843 8.33768 1.27984L4.80768 4.80984C4.51768 5.09984 4.03768 5.09984 3.74768 4.80984L0.217676 1.27984C-0.0723242 0.989844 -0.0723242 0.509844 0.217676 0.219844C0.367675 0.069844 0.557675 -0.00015618 0.747675 -0.000156197Z"
                          fill="#011627"
                        />
                      </svg>
                    </p>
                  </span>
                </div>
                <div style={{ flex: "0.23" }} className="arrowIcons">
                  <svg
                    style={{ paddingLeft: "20.2px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#011627"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    style={{ paddingRight: "20.2px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 9L15.75 12M15.75 12L12.75 15M15.75 12H8.25M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                      stroke="#011627"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    height: "15vh",
                    display: "flex",
                    gap: "15px",
                    paddingLeft: "28px",
                    paddingRight: "28px",
                  }}
                  className="calenderDateContainer"
                >
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Sun
                    </span>{" "}
                    <p>4</p>{" "}
                  </span>
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Mon
                    </span>{" "}
                    <p>5</p>
                  </span>
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Tue
                    </span>{" "}
                    <p>6</p>
                  </span>
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Wed
                    </span>{" "}
                    <p>7</p>
                  </span>
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Thu
                    </span>{" "}
                    <p>8</p>
                  </span>
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Fri
                    </span>{" "}
                    <p>9</p>
                  </span>
                  <span className="calenderDates">
                    {" "}
                    <span
                      style={{
                        fontSize: "13.28px",
                        fontWeight: "400",
                        background: "#2379CC",
                        width: "76px",
                        height: "30.54px",
                        borderRadius: "18.59px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        padding: "1px",
                        position: "relative",
                        top: "-1.7vh",
                        paddingTop: "4px",
                      }}
                    >
                      Sat
                    </span>{" "}
                    <p>10</p>
                  </span>
                </div>
              </div>
            </CardComponent>
          </Grid>
          <Grid item md={4}>
            <CardComponent
              sx={{
                marginTop: "1vh",
                width: "51vh",
                height: "21vh",
                boxShadow: "none",
              }}
            >
              <div className="jobContainer">
                <h3>Recent Added Jobs</h3>
                <div className="recentJobs">
                  <span style={{ background: "#F9F9F9", borderRadius: "10px" }}>
                    <p style={{ height: "3px" }}>
                      <h4>Jr. Frontend Engineer</h4>
                    </p>
                    <p style={{ height: "3px" }}>Indeed - 2 Days ago</p>
                  </span>
                  <span style={{ background: "#F9F9F9", borderRadius: "10px" }}>
                    <p style={{ height: "3px" }}>
                      <h4>iOS Developer</h4>
                    </p>
                    <p style={{ height: "3px" }}>Rozee.pk - 2 Days ago</p>
                  </span>
                  <span style={{ background: "#F9F9F9", borderRadius: "10px" }}>
                    <p style={{ height: "3px" }}>
                      <h4>Project Manager</h4>
                    </p>
                    <p style={{ height: "3px" }}>LinkedIn - 2 Days ago</p>
                  </span>
                </div>
              </div>
            </CardComponent>
          </Grid>
          <Grid item md={6}>
            <CardComponent
              sx={{
                width: "79vh",
                marginTop: "1vh",
                height: "19vh",
                boxShadow: "none",
              }}
            >
              <div className="activityFeedContainer">
                <div className="activityTitle">
                  <p
                    style={{
                      color: "#333333",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Activity Feed
                  </p>

                  <span
                    style={{
                      border: "1px solid #F0F0F0",
                      padding: "3px 5px 3px 2px",
                      height: "3vh",
                    }}
                  >
                    <p
                      style={{
                        color: "#333333",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      All Activity{" "}
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.74743 2C2.93743 2 3.12743 2.07 3.27743 2.22L6.27743 5.22L9.27743 2.22C9.56743 1.93 10.0474 1.93 10.3374 2.22C10.6274 2.51 10.6274 2.99 10.3374 3.28L6.80743 6.81C6.51743 7.1 6.03743 7.1 5.74743 6.81L2.21743 3.28C1.92743 2.99 1.92743 2.51 2.21743 2.22C2.36743 2.07 2.55743 2 2.74743 2Z"
                          fill="#333333"
                        />
                      </svg>
                    </p>
                  </span>
                </div>
                <div className="activites">
                  <div className="activitiesRow">
                    <span>
                      <p style={{ height: "5px" }}>Syed Taha Hasan</p>
                      <p>10 mins ago</p>
                    </span>
                    <span>
                      <p>Working</p>
                    </span>
                  </div>
                  <div className="activitiesRow">
                    <span>
                      <p style={{ height: "5px" }}>Muhammad Nouman</p>
                      <p>12 mins ago</p>
                    </span>
                    <span>
                      <p>Working</p>
                    </span>
                  </div>
                  <div className="activitiesRow">
                    <span>
                      <p style={{ height: "5px" }}>Muhammad Bilawal</p>
                      <p>20 mins ago</p>
                    </span>
                    <span>
                      <p>Working</p>
                    </span>
                  </div>
                </div>
              </div>
            </CardComponent>
          </Grid>
          <Grid item md={6}>
            <CardComponent
              sx={{
                marginTop: "1vh",
                height: "19vh",
                width: "79.1vh",
                boxShadow: "none",
              }}
            >
              <div className="meetings">
                <div className="titleMeeting">
                  <p
                    style={{
                      color: "#333333",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Activity Feed
                  </p>

                  <span
                    style={{
                      border: "1px solid #F0F0F0",
                      padding: "3px 5px 3px 2px",
                      height: "3vh",
                    }}
                  >
                    <p
                      style={{
                        color: "#333333",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      All Activity{" "}
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.74743 2C2.93743 2 3.12743 2.07 3.27743 2.22L6.27743 5.22L9.27743 2.22C9.56743 1.93 10.0474 1.93 10.3374 2.22C10.6274 2.51 10.6274 2.99 10.3374 3.28L6.80743 6.81C6.51743 7.1 6.03743 7.1 5.74743 6.81L2.21743 3.28C1.92743 2.99 1.92743 2.51 2.21743 2.22C2.36743 2.07 2.55743 2 2.74743 2Z"
                          fill="#333333"
                        />
                      </svg>
                    </p>
                  </span>
                </div>
                <div className="meetingData">
                  <div className="meetingRow" ></div>
                  <div className="meetingRow" ></div>
                  <div className="meetingRow" ></div>
                </div>
              </div>
            </CardComponent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
