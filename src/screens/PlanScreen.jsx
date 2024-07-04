import './PlanScreen.css'
// import React, { useEffect,useState } from 'react'
// import db from '../firebase'
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useSelector } from 'react-redux';
// // import {loadStripe} from '@stripe/stripe.js'



// const PlanScreen = () => {

//     const [products, setProducts] = useState([]);
//     const user = useSelector(selectUser)
//     const [subscription, setSubscription]  = useState(null) 

//     useEffect(()=>{
//         db.collection('customers')
//         .doc(user.uid)
//         .collection('subscription')
//         .then(querySnapShot=>{
//             querySnapShot.forEach(async subscription => {
//                 setSubscription({
//                     role:subscription.data().role,
//                     current_period_start:subscription.data().current_peiod_start.seconds,
//                     current_period_end:subscription.data().current_peiod_end.seconds,
//                 })
//             })
//         }) 
//     },[user.uid])

//     useEffect(() => {
//     const fetchProducts = async () => {
//       const q = query(collection(db, 'products'), where('active', '==', true));
//       const querySnapshot = await getDocs(q);
//       const products = {};
//       querySnapshot.forEach(async (productDoc) => {
//         products[productDoc.id] = productDoc.data();
//         const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));
//         priceSnap.docs.forEach((price) => {
//           products[productDoc.id].prices = {
//             priceId: price.id,
//             priceData: price.data(),
//           };
//         });
//       });
//       setProducts(products);
//     };

//     fetchProducts();
//     }, []);
//     // useEffect(() => {
//     //     db.collection('products').where('active', '==', true)
//     //     .get()
//     //     .then((querySnapshot) => {
//     //         const products = {};
//     //         querySnapshot.forEach(async productDoc => {
//     //             products[productDoc.id] = productDoc.data();
//     //             const priceSnap = await productDoc.ref.collection('prices').get();
//     //             priceSnap.docs.forEach(price => {
//     //                 products[productDoc.id].prices = {
//     //                     priceId: price.id,
//     //                     priceData: price.data()
//     //                 }
//     //             })
//     //         })
//     //         setProducts(products);
//     //     })
//     // },[])
//     // console.log(products)

//     const loadCheckOut = async (priceId) => {
//         const docRef  =await db
//             .collection('customers')
//             .doc(user.uid)
//             .collection('checkout_sessions')
//             .add({
//                 price: priceId,
//                 success_url: window.location.origin,
//                 cancel_url: window.location.origin,
//             })

//         docRef.onSnapshot(async (snap) => {
//             const {error, sessionId} = snap.data()
//             if(error){
//                 alert(`An error occured: ${error.message}`)
//             }
//             if(sessionId){
//                 const stripe = await loadStripe('')
//             } 
//         })
//     }

//   return (
//     <div className='planScreen' >
//         {subscription && <p>Renewal Date:{newDate(subscription?.current_peiod_end*1000).toLocaleDateString()}</p>}
//         {Object.entries(products).map(([productId, productData]) => {
//            const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role) 
//         })}
//         return(
//             <div 
//                 key={productId}
//                 className="planScreen__plan">
//                 <div className={`${
//                     isCurrentPackage && "planScreen__plan--disabled"} planScreen__info`}>
//                     <h5>{productData.name}</h5>
//                     <h6>{productData.description}</h6>
//                 </div>

//                 <button onClick={()=> !isCurrentPackage && loadCheckOut(productData.prices.priceId)}>
//                     {isCurrentPackage? 'Current Package': 'Subscribe'}
//                 </button>
//             </div>
//         )
//     </div>
//   )
// }

// export default PlanScreen
import React from 'react'

const PlanScreen = () => {
  return (
    <div>Plans</div>
  )
}

export default PlanScreen