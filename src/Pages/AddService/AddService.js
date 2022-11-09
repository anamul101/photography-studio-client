import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {
    const handelService=(e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const addService ={
            title,
            img,
            price,
            rating,
            description
        }
        // console.log(title,img,price,rating,description);
        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addService)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast.success(data.message);
                form.reset();
            }else{
                toast.error(data.error)
            }
        })
        .catch(err=>{
            toast.error(err.error)
        })
    }
    return (
        <>
            <h1 className='text-4xl font-bold mx-auto mt-4 text-center'>Add Your Photography Service</h1>
           <form onSubmit={handelService} className="form-control lg:w-1/2 my-20 mx-auto rounded-md p-4 border-orange-700 border">
               <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Service of Name</span>
                            </label>
                            <input type="text" name='title' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Service Image URL</span>
                            </label>
                            <input type="text" name='img' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Service price</span>
                            </label>
                            <input type="text" name='price' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' className="input input-bordered w-full max-w-xs" />
                        </div>
               </div>
                <div className='w-full'>
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <textarea className="textarea textarea-warning w-full h-40" name='description' required></textarea>
                </div>
                <div className="form-control ">
                    <input className="btn btn-warning hover:bg-orange-500 mt-4" type="submit" value="Add Your Service" />
                </div>
            </form> 
        </>
    );
};

export default AddService;