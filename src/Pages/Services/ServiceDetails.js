
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const {title,img,description,price,rating,_id}= useLoaderData();
    const navigate = useNavigate()

    const handelReview=(event)=>{
        event.preventDefault();
        const email=user?.email || "UnRegister";
        const serviceName=event.target.serviceName.value;
        const reviewText=event.target.reviewText.value;
        console.log(email,serviceName,reviewText);

        const reviews={
            service:_id,
            serviceName,
            email,
            reviewText
        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(reviews)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast.success(data.message);
                navigate('/reviews')
            }else{
                toast.error(data.error)
            }
        })
        .catch(err=>{
            toast.error(err.error)
        })
        event.target.reset();
    }
    const backToLogin=()=>{
        navigate('/signin')
    }
    return (
        <>
        <p className='text-2xl font-bold text-center mt-12 text-orange-600'><p className='text-black text-4xl font-bold'>Searvice of Name:</p> {title}</p>
        <div className="lg:w-2/3 bg-base-400 mx-auto border border-gray-400 my-12 rounded-md">
        {/* <PhotoView src={img}>
            <img src={img} style={{ objectFit: 'cover' }} alt="" />
        </PhotoView> */}
        <figure><img src={img} alt="Photography wedding" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between items-center">
                <p className='text-3xl font-bold'>{title}</p>
                <div className="badge badge-secondary flex justify-between"><p>Pating</p> <p>{rating}</p></div>
                </h2>
                <h2 className='text-xl font-bold text-orange-500'>Price: ${price}</h2>
                <p className='text-gray-700'>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-outline btn-warning">service Details</button>
                    </Link>
                </div>
            </div>
        </div>
        {/* review */}
        <section className='lg:w-2/3 mx-auto mb-12 '>
            <h1 className='text-4xl font-bold text-center my-8'>Reviews</h1>
        <>
            {
                user?.uid?
                <form onSubmit={handelReview}>
            <input type="text" placeholder="Type here" name='serviceName' defaultValue={title} readOnly className="input input-ghost text-center w-full" disabled /> <br />
            <div className='mt-4 text-center'>
                <input type="text" placeholder="Email" name='email' defaultValue={user?.email} className="input input-bordered mb-2 input-warning w-1/2 " readOnly/> <br />
                <textarea className="textarea textarea-warning w-1/2 h-60" name='reviewText' placeholder="Give your best Reviews..."></textarea>
            </div>
            <div className="form-control w-1/2 mx-auto">
                <input className="btn btn-warning hover:bg-orange-500 mt-4" type="submit" value="Add Reviews" />
            </div>
        </form>
                :
                <div className="form-control w-1/2 mx-auto">
                    <button onClick={backToLogin} className="btn btn-warning hover:bg-orange-500 mt-4">After login then Review</button>
                </div>
            }
        </>
        </section>
        </>
    );
};

export default ServiceDetails;