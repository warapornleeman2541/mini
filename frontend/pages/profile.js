import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

import Link from 'next/link'


const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>เกี่ยวกับเรา</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>เกี่ยวกับเรา</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     PetShop เป็นร้านขายสัตว์เลี้ยงและอุปกรณ์ของสัตว์เลี้ยง<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หากลูกค้าอยากได้อะไร แม้ในร้านเราไม่มีแม่ค้าก็สรรหามาให้จนได้ เพราะฉนั้นไว้ใจร้านเราได้ ร้านเราจัดส่งได้ทุกประเภท<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; แล้วแต่ลูกค้ารีเควสมา <br></br>
                    <br></br>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

                    
                    </div>
                    <br />
                    <br/><br/>
                    <img  src="https://i.pinimg.com/236x/30/f3/e3/30f3e34a8b333e05c6da92bf2d4449d7.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/236x/4e/ce/5d/4ece5d733e3db2331670e02b72c23bb5.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/236x/af/1c/16/af1c16d3f062e319ea13b235577c3565.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <img  src="https://i.pinimg.com/236x/32/62/bc/3262bc30c046d119522500ea5f7e503d.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/236x/30/65/b0/3065b0f77be61b04d23a062212759f46.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/236x/72/4b/31/724b3188f98e0a1420ae8cbf10f39eef.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    ติดต่อเราได้ที่<br></br>
                    เบอร์โทรศัพท์ 098-025-7121<br></br>
                    Facebook : DaDazz Waraporn<br></br>
                    IG : da_waraphorn<br></br>
                    <img  src="https://img.icons8.com/bubbles/2x/facebook-new.png"  width="50" height="50"></img> 
                    <img  src="https://img.icons8.com/bubbles/2x/instagram.png"  width="50" height="50"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    </div>
                  <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
