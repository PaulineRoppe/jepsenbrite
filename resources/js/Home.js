import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import Footer from './components/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Brand/>
                </div>
                <div className="tryIt2">
                <p className='tryIt'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat lobortis odio, nec bibendum magna pharetra eget. Donec quam justo, blandit eu turpis sed, vestibulum mollis metus. Pellentesque nec quam sit amet purus sagittis dictum et a nunc. Quisque pulvinar justo sit amet interdum mattis. Vestibulum posuere sed eros at faucibus. In sit amet congue diam. Etiam quis congue dui. Aliquam porttitor ligula in tellus luctus ornare. Proin libero metus, blandit eget dui sit amet, facilisis elementum ex. Pellentesque in ex vitae arcu pharetra maximus quis nec turpis. Aliquam consectetur consequat turpis, vitae blandit est malesuada efficitur. Aliquam condimentum scelerisque ipsum, nec tempor lorem placerat sed. Nulla neque orci, interdum non pulvinar id, aliquet a risus. Fusce a sapien in odio vulputate lobortis.

                                Nulla quis lacus maximus, fringilla arcu id, pellentesque nunc. Vivamus tincidunt mauris non turpis posuere malesuada. Sed quis quam sed arcu ullamcorper facilisis. Proin dictum mauris a ipsum vehicula feugiat. Fusce odio tortor, venenatis at euismod ac, dapibus non urna. Fusce laoreet consectetur odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec arcu sem, lobortis non justo quis, molestie condimentum ante. Phasellus quis justo risus. Sed in nibh orci. Maecenas pulvinar sit amet enim ut consequat. Quisque eget pharetra nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ipsum tellus, finibus ut lacus eget, hendrerit ornare odio.

                                Nulla felis turpis, condimentum eu aliquam et, cursus et risus. Maecenas at mattis quam. Aenean quis finibus ipsum. Etiam ornare quam ac neque mollis, a pretium elit convallis. Pellentesque vel eros vel lorem dapibus vestibulum molestie eget justo. Proin consectetur maximus ex, eu sollicitudin erat. Curabitur maximus tincidunt velit, nec dignissim nulla porta sed. Duis feugiat ligula purus, sit amet ultricies dolor viverra at. Phasellus posuere, ante vel rhoncus molestie, est tellus eleifend est, quis scelerisque velit tellus et lectus. Cras nec vestibulum nisl. Suspendisse vel tempor tortor. Proin pretium lacus vitae felis lacinia, non pulvinar ligula sollicitudin.

                                Proin eleifend lorem et malesuada mollis. Suspendisse potenti. Donec porta arcu lorem, nec accumsan ligula placerat euismod. Ut elementum iaculis leo in dignissim. Vestibulum enim diam, ornare id tristique ut, vehicula non magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Integer vel molestie nunc. Maecenas et urna sit amet mauris dictum vestibulum nec vel libero. Vestibulum pulvinar lobortis ullamcorper. Etiam pellentesque enim et risus convallis, eget ultricies neque iaculis.

                                Nam at diam sit amet felis pharetra tempor sit amet quis nibh. Ut laoreet enim vel felis tempor mattis. In ullamcorper, dui vel vehicula rutrum, eros nisi placerat mauris, tempus tempus mauris massa vitae quam. Suspendisse lobortis nisi eget egestas dignissim. Proin at ligula diam. Suspendisse at magna et nibh eleifend venenatis. Donec eget velit nec eros bibendum congue non a sem. Vivamus a ipsum at est fermentum lobortis. Nunc ut ex et ante porttitor ultrices. Aliquam ultrices arcu turpis, et feugiat odio semper ut. Etiam malesuada lectus ut leo ornare egestas. Mauris ac massa ipsum. Donec semper, massa vitae suscipit dignissim, orci ante mattis nibh, quis vehicula dui turpis sed lacus. Duis euismod faucibus dictum. Etiam iaculis lorem eget sodales facilisis.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat lobortis odio, nec bibendum magna pharetra eget. Donec quam justo, blandit eu turpis sed, vestibulum mollis metus. Pellentesque nec quam sit amet purus sagittis dictum et a nunc. Quisque pulvinar justo sit amet interdum mattis. Vestibulum posuere sed eros at faucibus. In sit amet congue diam. Etiam quis congue dui. Aliquam porttitor ligula in tellus luctus ornare. Proin libero metus, blandit eget dui sit amet, facilisis elementum ex. Pellentesque in ex vitae arcu pharetra maximus quis nec turpis. Aliquam consectetur consequat turpis, vitae blandit est malesuada efficitur. Aliquam condimentum scelerisque ipsum, nec tempor lorem placerat sed. Nulla neque orci, interdum non pulvinar id, aliquet a risus. Fusce a sapien in odio vulputate lobortis.

                                Nulla quis lacus maximus, fringilla arcu id, pellentesque nunc. Vivamus tincidunt mauris non turpis posuere malesuada. Sed quis quam sed arcu ullamcorper facilisis. Proin dictum mauris a ipsum vehicula feugiat. Fusce odio tortor, venenatis at euismod ac, dapibus non urna. Fusce laoreet consectetur odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec arcu sem, lobortis non justo quis, molestie condimentum ante. Phasellus quis justo risus. Sed in nibh orci. Maecenas pulvinar sit amet enim ut consequat. Quisque eget pharetra nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ipsum tellus, finibus ut lacus eget, hendrerit ornare odio.

                                Nulla felis turpis, condimentum eu aliquam et, cursus et risus. Maecenas at mattis quam. Aenean quis finibus ipsum. Etiam ornare quam ac neque mollis, a pretium elit convallis. Pellentesque vel eros vel lorem dapibus vestibulum molestie eget justo. Proin consectetur maximus ex, eu sollicitudin erat. Curabitur maximus tincidunt velit, nec dignissim nulla porta sed. Duis feugiat ligula purus, sit amet ultricies dolor viverra at. Phasellus posuere, ante vel rhoncus molestie, est tellus eleifend est, quis scelerisque velit tellus et lectus. Cras nec vestibulum nisl. Suspendisse vel tempor tortor. Proin pretium lacus vitae felis lacinia, non pulvinar ligula sollicitudin.

                                Proin eleifend lorem et malesuada mollis. Suspendisse potenti. Donec porta arcu lorem, nec accumsan ligula placerat euismod. Ut elementum iaculis leo in dignissim. Vestibulum enim diam, ornare id tristique ut, vehicula non magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Integer vel molestie nunc. Maecenas et urna sit amet mauris dictum vestibulum nec vel libero. Vestibulum pulvinar lobortis ullamcorper. Etiam pellentesque enim et risus convallis, eget ultricies neque iaculis.

                                Nam at diam sit amet felis pharetra tempor sit amet quis nibh. Ut laoreet enim vel felis tempor mattis. In ullamcorper, dui vel vehicula rutrum, eros nisi placerat mauris, tempus tempus mauris massa vitae quam. Suspendisse lobortis nisi eget egestas dignissim. Proin at ligula diam. Suspendisse at magna et nibh eleifend venenatis. Donec eget velit nec eros bibendum congue non a sem. Vivamus a ipsum at est fermentum lobortis. Nunc ut ex et ante porttitor ultrices. Aliquams ultrices arcu turpis, et feugiat odio semper ut. Etiam malesuada lectus ut leo ornare egestas. Mauris ac massa ipsum. Donec semper, massa vitae suscipit dignissim, orci ante mattis nibh, quis vehicula dui turpis sed lacus. Duis euismod faucibus dictum. Etiam iaculis lorem eget sodales facilisis.
                        </p>
                        </div>
                        <div>
                            <img src='http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Homer-Simpson-02-Donut-icon.png' className='homer' />
                            </div>
                <div>
                <Footer />
                </div>
            </div>
        );
    }}

if (document.getElementById('appli')) {
    ReactDOM.render(<Home />, document.getElementById('appli'));
}
