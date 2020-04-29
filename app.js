import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, TextInput, ScrollView, Dimensions, Alert } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        logoPageDisplay:"block",
        wholesomeMemesPageDisplay: "none",
        dankMemesPageDisplay: "none",
        edgyMemesPageDisplay: "none",
        edgyMemesWarningPageDisplay: "none",
        normieMemesPageDisplay: "none",
        postPageDisplay: "none",
        accountPageDisplay: "none",
        currentUserName: 'SonyTheMod',
        currentUserImage: 'https://codehs.com/uploads/8844b8527e0fcb7a3c0ca0423b153fa6',
        newPostImage: 'Enter Image URI here',
        newAccountImage: 'Enter image URI',
        newAccountName: 'Enter username',
        
        accounts: [
            {
                userImage: 'https://i.pinimg.com/originals/f3/ec/7a/f3ec7abba86a464454dec4dc888088d9.png',
                userName: 'SonyTheMod',
                accountColor: '#ffb86b',
                borderWidth: 2,
            },
        ],
        
        images: [
            {
                userImage: 'data:image/jpeg;base64,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',
                userName: 'TheShadowRealm',
                likes: 0,
                image: 'data:image/jpeg;base64,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',
                heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
            },
        ]
    }

    handleWholesomeMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "block",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "none",
        }))
    );
    
    handleNormieMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "block",
            edgyMemesWarningPageDisplay: "none",
        }))
    );
    
    handleDankMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "block",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "none",
        }))
    );
    
    handleEdgyMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "block",
        }))
    );

handleYesEdgyMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "block",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "none",
        }))
    );
    
    handleNoEdgyMemesPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "block",
            postPageDisplay: "none",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "none",
        }))
    );

    // When Post Page button is pressed, hide Feed and Account, show Create Post page
    handlePostPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "block",
            accountPageDisplay: "none",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "none",
        }))
    );

    // When Account Page button is pressed, hide Post and Feed, show Account page
    handleAccountPagePress = () => (
        this.setState(state => ({
            wholesomeMemesPageDisplay: "none",
            postPageDisplay: "none",
            accountPageDisplay: "block",
            logoPageDisplay: "none",
            dankMemesPageDisplay: "none",
            edgyMemesPageDisplay: "none",
            normieMemesPageDisplay: "none",
            edgyMemesWarningPageDisplay: "none",
        }))
    );

    addLike = (index) => {
        this.state.images[index].likes++;
        this.state.images[index].heartImage = 'https://codehs.com/uploads/221026e89fddbf54945d0d48f300dc98';
        this.setState({
            images: this.state.images
        })
    }
    
    createWholesomePost = () => (
        this.state.images.splice(0, 0, {
            userName: this.state.currentUserName,
            userImage: this.state.currentUserImage,
            likes: 0,
            image: this.state.newPostImage,
            heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
        }),
        // Reset input fields
        this.setState({newPostImage: 'Enter Image URI here'}),
        // Jaden rememer to make multiple post buttons so you can post in the different meme sections so you have to copy and paste this and change this code below
        this.handleWholesomeMemesPagePress()
    )
    
    createEdgyPost = () => (
        this.state.images.splice(0, 0, {
            userName: this.state.currentUserName,
            userImage: this.state.currentUserImage,
            likes: 0,
            image: this.state.newPostImage,
            heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
        }),
        // Reset input fields
        this.setState({newPostImage: 'Enter Image URI here'}),
        // Jaden rememer to make multiple post buttons so you can post in the different meme sections so you have to copy and paste this and change this code below
        this.handleEdgyMemesPagePress()
    )
    
    createDankPost = () => (
        this.state.images.splice(0, 0, {
            userName: this.state.currentUserName,
            userImage: this.state.currentUserImage,
            likes: 0,
            image: this.state.newPostImage,
            heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
        }),
        // Reset input fields
        this.setState({newPostImage: 'Enter Image URI here'}),
        // Jaden rememer to make multiple post buttons so you can post in the different meme sections so you have to copy and paste this and change this code below
        this.handleDankMemesPagePress()
    )
    
    createNormiePost = () => (
        this.state.images.splice(0, 0, {
            userName: this.state.currentUserName,
            userImage: this.state.currentUserImage,
            likes: 0,
            image: this.state.newPostImage,
            heartImage: 'https://codehs.com/uploads/6662bf14bacebce520250ac674f70b2f',
        }),
        // Reset input fields
        this.setState({newPostImage: 'Enter Image URI here'}),
        // Jaden rememer to make multiple post buttons so you can post in the different meme sections so you have to copy and paste this and change this code below
        this.handleNormieMemesPagePress()
    )
    
    changeAccount = (index) => {
        for (var i=0; i<this.state.accounts.length; i++) {
            this.state.accounts[i].accountColor = 'white';
            this.state.accounts[i].borderWidth = 0;
        }
        this.state.accounts[index].accountColor = '#ffb86b';
        this.state.accounts[index].borderWidth = 2,
        this.setState({
            accounts: this.state.accounts,
            currentUserName: this.state.accounts[index].userName,
            currentUserImage: this.state.accounts[index].userImage,
        })
    }
    
    createAccount = () => (
        this.state.accounts.splice(0, 0, {
            userName: this.state.newAccountName,
            userImage: this.state.newAccountImage,
            accountColor: 'white',
        }),
        // Reset input fields
        this.setState({newAccountName: 'Enter image URI', newAccountImage: 'Enter username'})
    )
    
  
    render() {
        
        return (
            <View style={styles.container}>
            
            
                <View style={styles.topAndBottomBar}>
                    <Text style={styles.title}>
                        Memes Galore
                    </Text>
                </View>
                
                <View style={{display: this.state.logoPageDisplay}}>
                 <TouchableHighlight onPress={this.handleWholesomeMemesPagePress}>
                    <Image source={"https://marvel-live.freetls.fastly.net/canvas/2020/4/4c69ed3980a34f649fe4086397d4c3cb?quality=95&fake=.png"}
                     style={{ height: 20*(deviceHeight/30), width: 17*(deviceHeight/30) }}>
                    </Image>
                  </TouchableHighlight>
                </View>
            
                <View style={{display: this.state.wholesomeMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.dankMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.edgyMemesWarningPageDisplay}}>
                 <Text style={styles.textbox}>
                 Warning: This section may contain content that is NSFW or may be disturbing or highly offensive to some. Please verify that you are at least 18 years old before entering the section!
                 </Text>
                        <TouchableHighlight
                        onPress={this.handleYesEdgyMemesPagePress}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Yes,I am 18
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                        onPress={this.handleNoEdgyMemesPagePress}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    No,I'm a jit
                                </Text>
                            </View>
                        </TouchableHighlight>
                </View>
                
                <View style={{display: this.state.edgyMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                <View style={{display: this.state.normieMemesPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            {this.state.images.map((info, index) => (
                                <View style={styles.middleContainer}>
                                    <View style={styles.infoBar}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height: 2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                    
                                    <Image
                                        source={info.image}
                                        style={styles.mainImage}
                                    />
                    
                                    <View style={styles.infoBar}>
                                        <TouchableHighlight
                                            onPress={() => {this.addLike(index)}}
                                        >
                                            <Image
                                                source={info.heartImage}
                                                style={styles.heartIcon}
                                            ></Image>
                                        </TouchableHighlight>
                                        <Text style={styles.infoText}>
                                                {info.likes} Likes
                                            </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                
                
                
                <View style={{display: this.state.postPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <View style={styles.infoBar}>
                            <Image
                                source={this.state.currentUserImage}
                                style={{ height:2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                            ></Image>
                            <Text style={styles.infoText}>
                                {this.state.currentUserName}
                            </Text>
                        </View>
                        <TextInput
                            style= {styles.textBox}
                            onChangeText={(newPostImage) => this.setState({newPostImage})}
                            value={this.state.newPostImage}
                        />
                        <TouchableHighlight
                        onPress={this.createWholesomePost}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Post Wholesome Meme
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                        onPress={this.createNormiePost}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Post Normie Meme
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                        onPress={this.createDankPost}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Post Dank Meme
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                        onPress={this.createEdgyPost}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Post Edgy Meme
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                        
                    </View>
                </View>
                
                <View style={{display: this.state.accountPageDisplay}}>
                    <View style={styles.screenCenter}>
                        <ScrollView>
                            <View style={styles.infoBar}>
                                <Text style={styles.infoText}>
                                    Change Account
                                </Text>
                            </View>
                            {this.state.accounts.map((info, index) => (
                                <TouchableHighlight
                                    onPress={() => {this.changeAccount(index)}}
                                >
                                     <View style={[styles.infoBar, {backgroundColor: info.accountColor, borderWidth: info.borderWidth}]}>
                                        <Image
                                            source={info.userImage}
                                            style={{ height:2*(deviceHeight/30), width: 2*(deviceHeight/30) }}
                                        ></Image>
                                        <Text style={styles.infoText}>
                                            {info.userName}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                            <View style={styles.infoBar}>
                            </View>
                            <View style={styles.infoBar}>
                                <Text style={styles.infoText}>
                                    Add New Account
                                </Text>
                            </View>
                            <TextInput
                                style= {styles.textBox}
                                onChangeText={(newAccountImage) => this.setState({newAccountImage})}
                                value={this.state.newAccountImage}
                            />
                            <TextInput
                                style= {styles.textBox}
                                onChangeText={(newAccountName) => this.setState({newAccountName})}
                                value={this.state.newAccountName}
                            />
                            <TouchableHighlight
                            onPress={this.createAccount}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Create Account
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </ScrollView >
                    </View>
                </View>

                <View style={styles.topAndBottomBar}>
                    <TouchableHighlight
                        onPress={this.handleWholesomeMemesPagePress}>
                    
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Wholesome Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleNormieMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Normie Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handlePostPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Post
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleDankMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Dank Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleEdgyMemesPagePress}
                    >
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Edgy Memes
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleAccountPagePress}>
                        <View style={styles.navButton}>
                            <Text style={styles.buttonText}>
                                Account
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    topAndBottomBar: {
        height: 3*(deviceHeight/25),
        width: deviceWidth,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ff9300',
        borderTopColor: '#f20775',
        borderTopWidth: 3,
        borderBottomColor: '#f20775',
        borderBottomWidth: 3,
    },
    title: {
        fontSize: deviceHeight/20,
        color: 'purple',
        fontFamily: 'Avenir',
    },
    screenCenter: {
        height: 19*(deviceHeight/25),
        width: deviceWidth,
    },
    infoBar: {
        height: 2*(deviceHeight/25),
        width: deviceWidth,
        backgroundColor: 'AD3D6F',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderColor: '#f20775',
    },
    infoText: {
        fontSize: deviceHeight/30,
        color: '#f20775',
        fontFamily: 'Avenir',
        marginLeft: 10,
    },
    heartIcon: {
        height: 2*(deviceHeight/30),
        width: 2*(deviceHeight/30),
        resizeMode: 'cover'
    },
    buttonText: {
        fontSize: .57*(deviceHeight/30),
        color: '#f20775',
        fontFamily: 'Avenir',
        textAlign: 'center',
    },
    navButton: {
        height: 2*(deviceHeight/25),
        width: 1*(deviceWidth/7),
        backgroundColor: 'peach',
        justifyContent: 'center',
        borderColor: '#f20775',
        borderWidth: 2,
    },
    button: {
        height: 2*(deviceHeight/25),
        width: (deviceWidth/3),
        backgroundColor: 'f20775',
        justifyContent: 'center',
        borderColor: '#f20775',
        borderWidth: 2,
        marginLeft: deviceWidth/3,
        marginTop: deviceHeight/40,
    },
    middleContainer: {
        flexDirection: 'column',
    },
    mainImage: {
        height: 15*(deviceHeight/25),
        width: deviceWidth,
        resizeMode: 'cover',
        borderBottomWidth: 10,
        borderTopWidth: 10,
        borderColor: '#ffb86b',
    },
    textBox: {
        width: 2*(deviceWidth/3),
        height: deviceHeight/10,
        padding: 10,
        marginLeft: deviceWidth/6,
        backgroundColor: '#ffb86b',
        marginTop: deviceHeight/40,
        marginBottom: deviceHeight/40,
        color: 'peach',
        fontSize: deviceHeight/35,
    },
});
