import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEditProduct from '../components/ModalEditProduct';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faWandMagic } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component';
import categorias from '../components/categorias.png';

const Catalog = () => {

    const [dataProduct, setDataProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idEdit, setIdEdit] = useState(0);

    const apiUrl = 'http://localhost:3000/products/api.php';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const getAllProducts = async () => {
        // const res = await axios.get(`${apiUrl}/productos`, config);
        // console.log(res);
        // setDataProduct(res.data);
        try {
            const res = await axios.get(apiUrl, config);
            setDataProduct(res.data);
        } catch (error) {
            console.error('Error de conexión:', error);
            setDataProduct([]);
        }
    }

    const openModalEdit = (id) => {
        setIdEdit(id);
        setShowModal(true);
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${apiUrl}/productos/${id}`, config)
                    .then(response => {
                        console.log(response);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                    })

                getAllProducts();
            }
        });
    }


    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Producto',
            selector: row => row.nombre,
        },
        {
            name: 'Precio',
            selector: row => row.precio,
        },
        {
            name: 'Descripcion',
            selector: row => row.descripcion,
        },
        {
            name: 'Editar',
            selector: row => <div onClick={() => { openModalEdit(row.id) }} className='cursor-pointer hover:text-yellow-400'>Editar</div>,
        },
        {
            name: 'Eliminar',
            selector: row => <div onClick={() => { deleteProduct(row.id) }} className='cursor-pointer hover:text-red-600'><FontAwesomeIcon icon={faTrash} /></div>,
        },
    ];

    // const data = [
    //     {
    //         id: 1,
    //         title: 'Beetlejuice',
    //         year: '1988',
    //     },
    //     {
    //         id: 2,
    //         title: 'Ghostbusters',
    //         year: '1984',
    //     },
    // ]

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <section className="text-gray-600 body-font">

            <div className="container px-5 py-24 mx-auto">
                <div className="p-4">
                    <Link to={'/registrar-producto'}>
                        <button className="flex ml-auto select-none rounded-lg bg-indigo-800 uppercase py-4 px-8 text-center font-sans text-sm font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Registrar Producto  <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </Link>
                </div>

                <div className="flex flex-wrap -m-4">
                    {dataProduct.length > 0
                        ? dataProduct.map((item, key) => {
                            return <div className="p-4 md:w-1/3" key={key}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.id}, {item.price}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.nombre}</h1>
                                        <p className="leading-relaxed mb-3">{item.descripcion}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <button onClick={() => { openModalEdit(item.id) }} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Editar porducto
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </button>

                                            <button onClick={() => { deleteProduct(item.id) }} className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    Eliminar
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </svg>6
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                        : <div className='text-center'>No hay productos registrados</div>
                    }
                </div>


                <div className="flex justify-center items-center min-h-screen">
                    <div className="max-w-[720px] mx-auto">
                        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <div
                                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                <img
                                    src={categorias}
                                    alt="ui/ux review check" />
                                <div
                                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                        {/* {item.nombre} */}
                                    </h5>
                                    <p
                                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                        {/* {item.id}, {item.price} */}
                                    </p>
                                </div>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                                    {/* {item.descripcion} */}
                                </p>
                            </div>


                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                <button
                                    className="block w-full select-none rounded-lg bg-emerald-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                // onClick={() => { openModalEdit(item.id) }}
                                >
                                    Editar <FontAwesomeIcon icon={faWandMagic} />
                                </button>
                                <button
                                    className="block w-full select-none rounded-lg bg-red-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                // onClick={() => { deleteProduct(item.id) }}
                                >
                                    Eliminar <FontAwesomeIcon icon={faTrash} />
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ModalEditProduct setShowModal={setShowModal} idEdit={idEdit} getAllProducts={getAllProducts} />}

            {/* {Data Table} */}
            {/* <div className='w-4/5 flex justify-center'>
                <DataTable
                    columns={columns}
                    data={dataProduct}
                    pagination
                />
            </div> */}

        </section>


    )
}

export default Catalog;