
import "./singlePost.css";
import police from "../../imgs/police.png";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


function SinglePost() {
   
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={police} alt="" />
                <h1 className="singlePostTitle">
                    Post title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <b>
                             Brendan
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                    <p className="singlePostDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                    </p>
                </div>
            </div>
    )
}

export default SinglePost
