import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ToggleCell } from 'js';

/* 부트 스트랩 모달 */
const ModalComponent = ({ showModal, handleClose, selectedImage, params }) => {
    /*  params은 fetch(SERVER_URL + `travalpack/${packNum}`) 또는 fetch(SERVER_URL + "travalpackAll", { method: 'GET' })API의 
        전체값을 받으면 보내진 값을 row.DB값을 입력해 세부적으로 출력한다 */
    return (
        <Modal show={showModal} onHide={handleClose} className="custom-modal-dialog modal-lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <p>패키지번호: {params.row.packNum}</p>
                    <p>패키지 이름: {params.row.name}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        className="modal-image"
                        src={selectedImage}
                        alt="모달 이미지"
                        style={{ width: '400px' }} // 이미지 크기 조절
                    />
                    <div style={{ marginLeft: '20px' }}>
                        {/* 클릭시'금액'과 '한국 통화 형식'변환 */}
                        <p>[가격]<ToggleCell text="가격:" value={params.row.price} /></p>
                        <p>숙박기간: {params.row.startDate} ~ {params.row.endDate}</p>
                        <p>등록일: {params.row.singupDate}</p>
                        <p>최대인원: {params.row.count}</p>
                        <p>흡연실(금연실): {params.row.smoke}</p>
                        <p>주소: {params.row.address}</p>
                        <p>상세내용: {params.row.text}</p>
                        <p>몇 인실: {params.row.person}</p>
                        <p>예약 가능한 상태: {params.row.reservation}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;