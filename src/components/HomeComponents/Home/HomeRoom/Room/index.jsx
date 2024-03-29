import React from "react";
import { Link } from "react-router-dom";

export default function Room(props) {
  const { room } = props;

  const descriptionStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    whiteSpace: "normal",
  };

  return (
    <Link to={`/roomdetail/${room.id}`} className=" reset-link">
      <div className="custom__RoomCard">
        <div className="card__Top">
          <img src={room.hinhAnh} alt="img" width={"100%"} />

          <h5 className="card__Title" style={descriptionStyle}>
            {room.tenPhong}
          </h5>

          <div style={descriptionStyle}>
            <p>{room.moTa}</p>
            <p>Guest: {room.khach}</p>
          </div>
        </div>

        <div className="card__Bottom text-left">
          <b>Giá: {room.giaTien}$</b>
        </div>
      </div>
    </Link>
  );
}
