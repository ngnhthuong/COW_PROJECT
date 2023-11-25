/* --------------------------------------------------- REACT */
import { useState, useEffect } from 'react';
/* --------------------------------------------------- CSS */
import './Lobby.css';
/* --------------------------------------------------- COMPONENTS */
import DocksModel from '../dock/DocksModel.jsx';
import LobbyChat from './LobbyChat.jsx';
import LobbyFunction from './LobbyFunction.jsx';
import LobbyRoomList from './LobbyRoomList.jsx';
import PlayerList from './LobbyPlayerList.jsx';
import RoomParticipants from './room-lobby/RoomParticipants.jsx';
import RoomFunction from './room-lobby/RoomFunction.jsx';
import CreateRoom from './room-lobby/CreateRoom.jsx';
/* --------------------------------------------------- DATA */
import { ROOMS_DATA, PLAYERLIST_DATA, PLAYER_DATA } from '../../data/dataMainMenu.js';
/* --------------------------------------------------------------------------------------------------- */

export default function Lobby({ lobby, handleLobby }) {

    const [rooms, setRooms] = useState([...ROOMS_DATA]);
    const [inRoom, setInRoom] = useState(false);
    const [createRoomDisplay, setCreateRoomDisplay] = useState(false)
    const [roomID, setRoomID] = useState(null);

    function handleJoinTeam() {
        setInRoom(!inRoom);
    };

    const handleCreateRoomDL = () => {
        setCreateRoomDisplay(() => {
            return !createRoomDisplay;
        })
    };

    const handleCreateRoom = (maxPlayers) => {
        const id_room = rooms.length + 1;
        const newRoom = {
            id: id_room,
            owner: PLAYER_DATA.id,
            member: [],
            max_member: maxPlayers,
            get now_member() {
                return this.member.length;
            },
            get full() {
                if (this.now_member === this.max_member) {
                    return true;
                }
                return false;
            },
        };
        console.log(maxPlayers);
        setRooms((prevRooms) => [...prevRooms, newRoom]);
        joinRoom(id_room);
    };

    const joinRoom = (id_room) => {
        setRoomID(id_room);
        setRooms((prevRooms) => {
            return prevRooms.map((room) => {
                if (room.id === id_room) {
                    return {
                        ...room,
                        member: [...room.member, PLAYER_DATA],
                    };
                }
                return room;
            });
        });
        handleJoinTeam();
    };

    const outRoom = (id_room) => {
        setRoomID(null);
        let deleteRoom = false;
        setRooms((prevRooms) => {
            const newRooms = prevRooms.map((room) => {
                if (room.id === id_room) {
                    const newMemberRoom = room.member.filter((user) => user.id !== PLAYER_DATA.id);
                    if (newMemberRoom.length === 0) {
                        deleteRoom = true;
                    }
                    return {
                        ...room,
                        member: newMemberRoom,
                    };
                }
                return room;
            });
            if (deleteRoom) {
                return newRooms.filter((room) => room.id !== id_room);
            }
            return newRooms;
        });
        handleJoinTeam();
        console.log(setRooms);
    };

    return (
        <div className={`lobby-outside ${lobby ? 'open' : 'close'}`}>
            <div className="lobby-modal box--shadow">
                <div className="lobby-header flex--row">
                    <div className="lobby-title">
                        <p>Lobby Room</p>
                        <div onClick={handleLobby} className="lobby-close__zone">
                            <div className="lobby-close box--shadow">
                                <i className="fas fa-times close-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lobby flex--row">
                    <div className={`lobby-left flex--col ${inRoom ? 'close' : 'open'}`}>
                        <LobbyRoomList
                            checkJoin={joinRoom}
                            roomData={rooms}
                        />
                        <div className="lobby-chat-func flex--row">
                            <LobbyChat playerChatName={PLAYER_DATA.name} />
                            <LobbyFunction onDisplayCreateRoom={handleCreateRoomDL} />
                            <CreateRoom
                                onDisplay={createRoomDisplay}
                                onDisplayFC={handleCreateRoomDL}
                                onCreateRoom={handleCreateRoom}
                            />
                        </div>
                    </div>
                    <div className={`lobby-left flex--col ${inRoom ? 'open' : 'close'}`}>
                        <RoomParticipants
                            roomID={roomID}
                            roomData={rooms}
                        />
                        <div className="lobby-chat-func flex--row">
                            <LobbyChat playerChatName={PLAYER_DATA.name} />
                            <RoomFunction roomID={roomID} checkJoin={outRoom} />
                        </div>
                    </div>
                    <div className="lobby-right box--shadow">
                        <PlayerList playerList={PLAYERLIST_DATA} />
                    </div>
                </div>
                <DocksModel />
            </div>
        </div>
    )
}
