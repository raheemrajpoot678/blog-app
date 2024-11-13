import { useDeletePost } from "@/hooks/useDeletePost";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import Overlay from "./Overlay";
import { useNavigate } from "react-router-dom";

interface DeletePopupProps {
  onClose: () => void;
  title: string;
  id: string;
}

const DeletePopup: React.FC<DeletePopupProps> = ({ title, id, onClose }) => {
  const { mutate, isPending } = useDeletePost();
  const navigate = useNavigate();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success(`"${title}" deleted successfully!`);
        onClose();
        navigate("/");
        window.scrollTo({ top: 490, behavior: "smooth" });
      },
      onError: (err: any) => {
        toast.error("�� An error occurred while deleting the property");
        console.log(err);
      },
    });
  };

  return (
    <>
      <Overlay />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-5 w-full max-w-md relative shadow-lg">
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p className="mb-4 text-gray-700">
            Are you sure you want to delete{" "}
            <span className="font-semibold">"{title}"</span>?
          </p>

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="bg-red-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              {isPending && <AiOutlineLoading className="animate-spin" />}
              <p className="">Delete</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;
