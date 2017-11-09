#include<iostream>
using namespace std;

int findMax_inner(int r,int c,char (*TOOL)[100],int M,int C,int l){
    int sum=0;
    int max = 0;
    for(int i=0;i<=M-l;++i){
        for(int j=0;j<l;++j){
            sum += TOOL[r][c+j+i];
        }
        if(sum>=max && sum <=C)
            max = sum;
        sum=0;
    }
    return max;
}
int findMax(int r,int c,char (*TOOL)[100],int M,int C){
    int max = 0;
    int sum=0;
    for(int i=0;i<M;++i){
        sum=findMax_inner(r,c,TOOL,M,C,i+1);
        if(sum>max)
            max=sum;
    }
    return max;
}
int nextBox(int N,int M,int C,char (*TOOL)[100],int R,int CC){
    int sum=0,max=0;
    for(int r=R;r<N;++r){
        for(int c=0;c<N-M;++c){
            if(r!=R || c>CC){
                sum+=findMax(r,c,TOOL,M,C);
                if(sum>max)
                    max=sum;
                sum=0;
            }
        }
    }
}
int findBestSum(int N,int M,int C,char (*TOOL)[100]){
    int max=0,sum=0;
    for(int r=0;r<N;++r){
        for(int c=0;c<N-M;++c){
            sum+=findMax(r,c,TOOL,M,C);
            sum+=nextBox(N,M,C,TOOl,r,c);
            if(sum>max)
                max = sum;
            sum=0;
        }
    }
    return max;
}
int main(){
    int N,M,C,testCase;
    char TOOL[100][100];
    cin>>testCase;
    for(int test=0;test<testCase;++test){
        cin>>N>>M>>C;
        for(int i=0;i<N;++i){
            for(int j=0;j<N;++j){
                cin>>TOOL[i][j];
            }
        }
        findBestSum(N,M,C,TOOL);
    }
}