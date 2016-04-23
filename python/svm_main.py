import pandas as pd
import numpy as np

from sklearn import svm
from faker import Factory
from bokeh.plotting import figure, show, output_file, ColumnDataSource
from bokeh.models import HoverTool, BoxSelectTool
from bokeh.embed import components
from bokeh.models.tools import BoxZoomTool, WheelZoomTool, ResetTool

# create an instance of SVM to fit data
C=1.0 # reg term
SVM = svm.SVC(kernel='linear',C=C)

##
# Function to generate pseudo-data
##
def generate_data():
    # parameters
    N = 200
    dim = 2
    N_users = N*2

    # generate gaussian data 
    mu0 = np.array([5,20])
    mu1 = np.array([12,20])
    cov0 = np.array([[10., 10.],[10., 30.]])
    cov1 = np.array([[10., 30.],[0., 10.]])
    
    var0 = np.random.multivariate_normal(mu0, cov0, N)
    var1 = np.random.multivariate_normal(mu1, cov1, N)
    
    # change negative values to zero
    for idx1,arr1 in enumerate(var0):
        for idx2, value in enumerate(arr1):
            if value < 0:
                var0[idx1,idx2] = 0
    
    lowrisk = np.zeros((N,1),dtype=np.int) # low risks
    highrisk = np.ones((N,1),dtype=np.int) # high risks
    labels = np.concatenate((lowrisk,highrisk))
    
    temp = np.concatenate((var0.reshape(N,dim),
                           var1.reshape(N,dim)), axis=0)
    temp = np.concatenate((temp,labels),axis=1)
    
    userData = pd.DataFrame(data=temp,
                         columns=['months','applications','labels'])
    
    # container for generating fake names
    dummy = Factory.create('no_NO')
    
    # populate names
    userName = pd.Series()
    for userID in range(0,N_users):
        userName.set_value(userID, dummy.name())
    
    userData = pd.concat([userData, userName],axis=1)
    userData.columns = ['months', 'applications', 'labels', 'names']
    
    return userData
##    
# Function for svm model
##
def train_svm(X_train, Y_train):
    return SVM.fit(X_train, Y_train)

if __name__ == '__main__':
    
    userData = generate_data()

    # create an instance of SVM to fit data
    C=1.0 # reg term
    SVM = svm.SVC(kernel='linear',C=C)
    
    # train svm model
    risk_model = train_svm(userData[['months','applications']], userData['labels'])
    
    # classify random user
    X=17; Y=26
    randomUser = np.array([X,Y])
    pred = risk_model.predict(randomUser)
    
    # plotting with bokeh
    source = ColumnDataSource(
            data=dict(
                      months = userData['months'],
                      apps_ = userData['applications'],
                      names_ = userData['names'] 
                      )
                              )
    
    hover = HoverTool(tooltips=[
                                ("Name", "@names_"),
                                ("Months unemployed", "$x{int}"),
                                ("Submissions", "$y{int}")
                                ]
                      )
    
    TOOLS = [BoxSelectTool(), WheelZoomTool(), ResetTool(), hover]
    
    p = figure(plot_width=800, plot_height=900, title="NAV risk assessment", tools=TOOLS)
    p.xaxis.axis_label = 'Unemployed duration (months)'
    p.yaxis.axis_label = 'Number of applications submitted'
    
    colormap = {0:'green',1:'red'}
    colors = [colormap[x] for x in userData['labels']]
    
    p.circle('months', 'apps_', color=colors, fill_alpha=0.2, size=10,source=source)
    p.circle(X,Y,color='blue',size=10)
    
    output_file("NAVrisk.html", title="NAVrisk.py example")
    show(p)
    
    # Create HTML elements to export
    #figJS, figDiv = components(p)
    
    #Html_file= open("/Users/dianaponce/Desktop/figureJS_new.html","w")
    #Html_file.write(figJS)
    #Html_file.close()
    
    #Html_file= open("/Users/dianaponce/Desktop/figureDiv_new.html","w")
    #Html_file.write(figDiv)
    #Html_file.close()