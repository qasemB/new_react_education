import { createPortal } from "react-dom";
import { permissionHOC } from "./permissionHOC";

const UserAdd = ({setShowModal}) => {

    return createPortal(
        (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                <form className="bg-white p-4 rounded min-w-[500px]">
                    <div className="modal-content">
                        <div className="flex justify-between items-center">
                            <h5 className="modal-title">ایجاد کاربر جدید</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">نام</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">ایمیل</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <button type="submit" className="btn btn-primary">ذخیره</button>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        )
        , document.getElementById("modal-root"))
};

export default permissionHOC(UserAdd);
