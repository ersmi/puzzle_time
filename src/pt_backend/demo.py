import requests

URLP = 'http://localhost:8000/a/'

def test1():
    url = URLP + 'login'
    r = requests.get(url)
    print url
    print r
    print r.content, '\n'
    
def test2():
    url = URLP + 'login'
    data = { 'username' : 'test', 'password' : 'testpassword' }
    r = requests.post(url, data=data)
    print url, data
    print r
    print ''
    #print r.content, '\n'
    
def test3():
    """ Puzzle"""
    url = URLP + 'puzzle?puzzleid=4'
    r = requests.get(url)
    print url
    print r
    print r.content
    

def test4():
    """ Puzzle POST"""
    url = URLP + 'puzzle'
    data = { 'pictureid' : 2 }
    r = requests.post(url, data=data)
    print url, data
    print r, '\n'
    
def test5():
    """ Picture GET"""
    url = URLP + 'picture?pictureid=2'
    r = requests.get(url)
    print url
    print r
    print r.content
    
#def test6():
    """ Picture POST"""
    #url = URLP + 'picture'
    
#def test6():
    """ Users GET"""
    #url = URLP + 'user'
    
print '\n\n'
test2()
raw_input()
test1()
raw_input()
test3()
raw_input()
test4()
raw_input()
test5()