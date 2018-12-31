import React from 'react'
import styled from 'styled-components'
import ScrollPercentage from 'react-scroll-percentage'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled(ScrollPercentage)``
class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollPosition: 0,
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `gatsby`,
            `application`,
            `react`,
            'Ryan Clausen',
            'Clausen',
            'fullstack',
            'full-stack',
            'developer',
            'dev',
            'lambda',
            'lambda school',
          ]}
        />
        <ScrollPercentage onChange={(percentage) => this.setState({scrollPosition:percentage})}>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p style={{ width: '300px' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nemo
            quo odit dolorum ducimus temporibus voluptate similique hic saepe
            neque, voluptas quam modi totam voluptates molestiae obcaecati ea
            adipisci harum! Tenetur doloremque, maiores maxime eligendi at et
            dicta, dolorum suscipit unde voluptates, iusto assumenda quae atque
            deserunt in illo. Quia pariatur doloribus, repudiandae facere, ad
            magnam neque, temporibus nostrum a dolor facilis expedita culpa modi
            odio asperiores laborum saepe esse? Eius saepe id nemo soluta
            adipisci quidem quos sunt enim! Adipisci dolores unde laudantium
            molestiae aut consequatur exercitationem nihil magnam neque
            doloremque voluptate distinctio assumenda sint ipsum, obcaecati iste
            officia voluptates sed rem repellat beatae nulla praesentium.
            Repellendus maxime corporis molestias, deleniti consequatur quas
            consectetur. Hic aliquam numquam ex quod impedit minima quae ab, eos
            soluta in maiores qui similique minus. Dicta autem odit architecto!
            Nostrum provident voluptatum, quis possimus impedit debitis in
            obcaecati pariatur nobis labore, excepturi, reiciendis facere.
            Placeat sequi optio perferendis facilis repellendus fuga, magni
            adipisci consectetur tempore dicta recusandae iure eveniet alias sed
            unde obcaecati nostrum. Explicabo dolorem perspiciatis architecto
            nesciunt libero ullam sequi itaque harum numquam voluptate qui
            debitis nostrum neque, eaque accusamus delectus voluptatum aliquam
            maxime sed eum labore dolore soluta? Error, numquam incidunt! Ipsa
            dolorem impedit quas, sequi molestiae hic distinctio quod quos iusto
            ratione sint! Quidem odit eum fugit, aliquid ipsa nesciunt adipisci
            amet asperiores voluptatibus natus. Magni porro ipsam iusto
            reprehenderit hic necessitatibus quisquam earum repudiandae
            laudantium eaque quibusdam provident sint culpa ad excepturi quasi
            non sed, cum perspiciatis! Tempora quos laboriosam impedit, maxime
            inventore earum, possimus non minus, ad eaque repellat voluptatem.
            Rerum in illo nobis harum esse porro commodi ea quaerat doloremque
            sunt quod, suscipit quis hic odio accusamus consequuntur dignissimos
            dolorum vero ducimus maxime quibusdam incidunt! Mollitia ipsum
            molestias optio, dicta iste quasi, odio, reprehenderit itaque eaque
            minus atque dolores fuga sapiente minima tempora et est dolorem rem
            quo? Sequi pariatur ab, amet est eum itaque, earum quia laboriosam
            maiores placeat, reiciendis quisquam cumque doloremque magni maxime
            vitae! Deserunt reiciendis nulla, ad facere velit consectetur error
            pariatur voluptatibus nisi repudiandae, ullam officia aliquam id
            dignissimos, voluptatum laborum vero odit? Adipisci ut blanditiis,
            non mollitia accusamus reprehenderit ex inventore eos! Quidem
            placeat enim quisquam hic numquam veniam nesciunt repellendus,
            tempora eaque ex praesentium possimus voluptates iusto corrupti
            nobis esse cupiditate voluptate assumenda. Ipsum labore nulla
            laboriosam ad expedita, quidem natus laborum sint id? Neque sequi
            inventore molestiae. Magni, nemo?{' '}
          </p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </ScrollPercentage>
      </Layout>
    )
  }
}
export default IndexPage
