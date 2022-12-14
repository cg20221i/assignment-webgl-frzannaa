function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
    var vertices = [
        //number 3
        //1st top-front          //blue 
        -1.3, -1.5, 1, 0, 0, 1, 0, 0, -1, // Index:  0
        -1.3, -1, 1, 0, 0, 1, 0, 0, -1, //Index:  1
        0, -1, 1, 0, 0, 1, 0, 0, -1, // Index:  2
        0, -1.5, 1, 0, 0, 1, 0, 0, -1, // Index:  3
        //1st top-back           //red
        -1.3, -1.5, 0.5, 1, 0, 0, 0, 0, 1, // Index:  4
        -1.3, -1, 0.5, 1, 0, 0, 0, 0, 1, // Index:  5
        0, -1, 0.5, 1, 0, 0, 0, 0, 1, // Index:  6
        0, -1.5, 0.5, 1, 0, 0, 0, 0, 1, // Index:  7
        //1st top-left           //white
        -0, -1.5, 1, 1, 1, 1, 1, 0, 0, // Index: 12
        -0, -1, 1, 1, 1, 1, 1, 0, 0, // Index: 13
        -0, -1, 0.5, 1, 1, 1, 1, 0, 0, // Index: 14
        -0, -1.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 15
        //1st top-bottom           //green
        -1.3, -1, 0.5, 0, 1, 0, 0, -1, 0, // Index: 16
        -1.3, -1, 1, 0, 1, 0, 0, -1, 0, // Index: 17
        -0, -1, 1, 0, 1, 0, 0, -1, 0, // Index: 18
        -0, -1, 0.5, 0, 1, 0, 0, -1, 0, // Index: 19
        //1st top-top                //yellow
        -1.3, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 20
        -1.3, -1.5, 1, 1, 1, 0, 0, 1, 0, // Index: 21
        -0, -1.5, 1, 1, 1, 0, 0, 1, 0, // Index: 22
        -0, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 23
        //1st top-right    //blue
        -0.9, -0.5, 1, 0, 0, 1, 0, 0, -1, // Index:  24    
        -0.9, -1.5, 1, 0, 0, 1, 0, 0, -1, // Index:  25
        -1.3, -1.5, 1, 0, 0, 1, 0, 0, -1, // Index:  26
        -1.3, -0.5, 1, 0, 0, 1, 0, 0, -1, // Index:  27
        //1st top-right -back     //red
        -0.9, -0.5, 0.5, 1, 0, 0, 0, 0, 1, // Index:  28
        -0.9, -1.5, 0.5, 1, 0, 0, 0, 0, 1, // Index:  29
        -1.3, -1.5, 0.5, 1, 0, 0, 0, 0, 1, // Index: 30
        -1.3, -0.5, 0.5, 1, 0, 0, 0, 0, 1, // Index:  31
        //first right             //orange
        -1.3, 0, 0.5, 1, 0.5, 0, -1, 0, 0, // Index:  32
        -1.3, -1.5, 0.5, 1, 0.5, 0, -1, 0, 0, // Index:  33
        -1.3, -1.5, 1, 1, 0.5, 0, -1, 0, 0, // Index: 34
        -1.3, 0, 1, 1, 0.5, 0, -1, 0, 0, // Index: 35
        //middle-left     //white
        -0.9, -0.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 36
        -0.9, -0.5, 1, 1, 1, 1, 1, 0, 0, // Index: 37
        -0.9, -1.5, 1, 1, 1, 1, 1, 0, 0, // Index: 38
        -0.9, -1.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 39
        //middle front      //blue
        -0, 0, 1, 0, 0, 1, 0, -1, 0, // Index: 40
        -0, -0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 41
        -1.3, -0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 42
        -1.3, 0, 1, 0, 0, 1, 0, -1, 0, // Index: 43
        //1st top-right          //yellow
        -1.3, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 44
        -1.3, -1.5, 1, 1, 1, 0, 0, 1, 0, // Index: 45
        -0, -1.5, 1, 1, 1, 0, 0, 1, 0, // Index: 46
        -0, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 47
        //middle-back       //red
        -0, 0, 0.5, 1, 0, 0, 0, -1, 0, // Index: 48
        -0, -0.5, 0.5, 1, 0, 0, 0, -1, 0, // Index: 49
        -1.3, -0.5, 0.5, 1, 0, 0, 0, -1, 0, // Index: 50
        -1.3, 0, 0.5, 1, 0, 0, 0, -1, 0, // Index: 51
        //middle-right      //white
        -0, -0, 1, 1, 1, 1, 1, 0, 0, // Index: 52
        -0, -0.5, 1, 1, 1, 1, 1, 0, 0, // Index: 53
        -0, -0.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 54
        -0, -0, 0.5, 1, 1, 1, 1, 0, 0, // Index: 55
        //middle-bottom- left         //white
        -0, 1, 0.5, 1, 1, 1, 1, 0, 0, // Index: 56
        -0, 0.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 57
        -0, 0.5, 1, 1, 1, 1, 1, 0, 0, // Index: 58
        -0, 1, 1, 1, 1, 1, 1, 0, 0, // Index: 59
        //middle-top        //yellow
        -1.3, -0.5, 0.5, 1, 1, 0, 1, 0, 0, // Index: 60
        -1.3, -0.5, 1, 1, 1, 0, 1, 0, 0, // Index: 61
        -0, -0.5, 1, 1, 1, 0, 1, 0, 0, // Index: 62
        -0, -0.5, 0.5, 1, 1, 0, 1, 0, 0, // Index: 63
        //bottom-front  //blue
        -1.3, 0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 64
        -1.3, -0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 65
        -0.9, -0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 66
        -0.9, 0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 67
        //right down back     //red
        -1.3, 0.5, 0.5, 1, 0, 0, 0, 1, 0, // Index: 68
        -1.3, 0, 0.5, 1, 0, 0, 0, 1, 0, // Index: 69
        -0.9, 0, 0.5, 1, 0, 0, 0, 1, 0, // Index: 70
        -0.9, 0.5, 0.5, 1, 0, 0, 0, 1, 0, // Index: 71
        //right down          // orange
        -1.3, 0.5, 0.5, 1, 0.5, 0, -1, 0, 0, // Index:  72
        -1.3, 0, 0.5, 1, 0.5, 0, -1, 0, 0, // Index:  73
        -1.3, 0, 1, 1, 0.5, 0, -1, 0, 0, // Index:  73
        -1.3, 0.5, 1, 1, 0.5, 0, -1, 0, 0, // Index: 74
        //middle dowwn       //green
        -1.3, 0, 0.5, 0, 1, 0, 0, -1, 0, // Index: 75
        -1.3, 0, 1, 0, 1, 0, 0, -1, 0, // Index: 76
        -0, 0, 1, 0, 1, 0, 0, -1, 0, // Index: 77
        -0, 0, 0.5, 0, 1, 0, 0, -1, 0, // Index: 78
        //1st top-left        //white
        -0.9, 0, 1, 1, 1, 1, 1, 0, 0, // Index: 8
        -0.9, 0.5, 1, 1, 1, 1, 1, 0, 0, // Index: 9
        -0.9, 0.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 10
        -0.9, 0, 0.5, 1, 1, 1, 1, 0, 0, // Index: 11
        //down front       //blue
        0, 1, 1, 0, 0, 1, 0, -1, 0, // Index: 79
        0, 0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 80
        -1.3, 0.5, 1, 0, 0, 1, 0, -1, 0, // Index: 81
        -1.3, 1, 1, 0, 0, 1, 0, -1, 0, // Index: 82
        //down back       //red
        -1.3, 1, 0.5, 1, 0, 0, 0, 1, 0, // Index: 83
        -1.3, 0.5, 0.5, 1, 0, 0, 0, 1, 0, // Index: 84
        -0, 0.5, 0.5, 1, 0, 0, 0, 1, 0, // Index: 85
        -0, 1, 0.5, 1, 0, 0, 0, 1, 0, // Index: 86
        //down up       //yellow
        -1.3, 0.5, 0.5, 1, 1, 0, 1, 0, 0, // Index: 87
        -1.3, 0.5, 1, 1, 1, 0, 1, 0, 0, // Index: 88
        -0, 0.5, 1, 1, 1, 0, 1, 0, 0, // Index: 89
        -0, 0.5, 0.5, 1, 1, 0, 1, 0, 0, // Index: 90
        //down       //green
        -0, 1, 0.5, 0, 1, 0, 0, -1, 0, // Index: 91
        -0, 1, 1, 0, 1, 0, 0, -1, 0, // Index: 92
        -1.3, 1, 1, 0, 1, 0, 0, -1, 0, // Index: 93
        -1.3, 1, 0.5, 0, 1, 0, 0, -1, 0, // Index: 94
        //right down      //orange
        -1.3, 1, 0.5, 1, 0.5, 0, 0, 1, 0, // Index: 95
        -1.3, 0.5, 0.5, 1, 0.5, 0, 0, 1, 0, // Index: 96
        -1.3, 0.5, 1, 1, 0.5, 0, 0, 1, 0, // Index: 97
        -1.3, 1, 1, 1, 0.5, 0, 0, 1, 0, // Index: 98

        // //Number 0
        //top-front          //orange
        -1.6, -1.5, 1, 1, 0.5, 0, 0, 0, -1, // Index:  99
        -1.6, -1, 1, 1, 0.5, 0, 0, 0, -1, //Index:  100
        -2.9, -1, 1, 1, 0.5, 0, 0, 0, -1, // Index:  101
        -2.9, -1.5, 1, 1, 0.5, 0, 0, 0, -1, // Index:  102
        //top-back           //yellow
        -2.9, -1.5, 0.5, 1, 1, 0, 0, 0, 1, // Index:  103
        -2.9, -1, 0.5, 1, 1, 0, 0, 0, 1, // Index:  104
        -1.6, -1, 0.5, 1, 1, 0, 0, 0, 1, // Index:  105
        -1.6, -1.5, 0.5, 1, 1, 0, 0, 0, 1, // Index:  106
        //top-left          //white
        -2.9, -1.5, 1, 0, 0, 1, 1, 0, 0, // Index: 111
        -2.9, -1, 1, 0, 0, 1, 1, 0, 0, // Index: 112
        -2.9, -1, 0.5, 0, 0, 1, 1, 0, 0, // Index: 113
        -2.9, -1.5, 0.5, 0, 0, 1, 1, 0, 0, // Index: 114
        //top-top      //green
        -2.9, -1.5, 0.5, 0, 1, 0, 0, -1, 0, // Index: 115
        -2.9, -1.5, 1, 0, 1, 0, 0, -1, 0, // Index: 116
        -1.6, -1.5, 1, 0, 1, 0, 0, -1, 0, // Index: 117
        -1.6, -1.5, 0.5, 0, 1, 0, 0, -1, 0, // Index: 118
        //top-bottom        //red
        -2.9, -1, 0.5, 1, 0, 0, 0, -1, 0, // Index: 119
        -2.9, -1, 1, 1, 0, 0, 0, -1, 0, // Index: 120
        -1.6, -1, 1, 1, 0, 0, 0, -1, 0, // Index: 121
        -1.6, -1, 0.5, 1, 0, 0, 0, -1, 0, // Index: 122

        //left  
        //left front    //orange
        -1.6, 1, 1, 1, 0.5, 0, 0, 1, 0, // Index: 123
        -1.6, -1.5, 1, 1, 0.5, 0, 0, 1, 0, // Index: 124
        -2, -1.5, 1, 1, 0.5, 0, 0, 1, 0, // Index: 125
        -2, 1, 1, 1, 0.5, 0, 0, 1, 0, // Index: 126
        //left back    //yellow
        -2, 1, 0.5, 1, 1, 0, 0, 1, 0, // Index: 127
        -2, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 128
        -1.6, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 129
        -1.6, 1, 0.5, 1, 1, 0, 0, 1, 0, // Index: 130
        //left left     //white
        -1.6, 1, 1, 0, 0, 1, 1, 0, 0, // Index: 131
        -1.6, -1.5, 1, 0, 0, 1, 1, 0, 0, // Index: 132
        -1.6, -1.5, 0.5, 0, 0, 1, 1, 0, 0, // Index: 133
        -1.6, 1, 0.5, 0, 0, 1, 1, 0, 0, // Index: 134
        //left-right    //blue
        -2, 1, 1, 1, 1, 1, 1, 0, 0, // Index: 135
        -2, -1.5, 1, 1, 1, 1, 1, 0, 0, // Index: 136
        -2, -1.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 137
        -2, 1, 0.5, 1, 1, 1, 1, 0, 0, // Index: 138

        //bottom
        //bottom-front
        -2.9, 1, 1, 1, 0.5, 0, 0, -1, 0, // Index: 139
        -2.9, 0.5, 1, 1, 0.5, 0, 0, -1, 0, // Index: 140
        -1.6, 0.5, 1, 1, 0.5, 0, 0, -1, 0, // Index: 141
        -1.6, 1, 1, 1, 0.5, 0, 0, -1, 0, // Index: 142
        //bottom-back
        -2.9, 1, 0.5, 1, 1, 0, 0, -1, 0, // Index: 143
        -2.9, 0.5, 0.5, 1, 1, 0, 0, -1, 0, // Index: 144
        -1.6, 0.5, 0.5, 1, 1, 0, 0, -1, 0, // Index: 145
        -1.6, 1, 0.5, 1, 1, 0, 0, -1, 0, // Index: 146
        //bottom-top
        -1.6, 0.5, 0.5, 0, 1, 0, 0, -1, 0, // Index: 147
        -1.6, 0.5, 1, 0, 1, 0, 0, -1, 0, // Index: 148
        -2.9, 0.5, 1, 0, 1, 0, 0, -1, 0, // Index: 149
        -2.9, 0.5, 0.5, 0, 1, 0, 0, -1, 0, // Index: 150
        //bottom-bottom
        -1.6, 1, 0.5, 1, 0, 0, 0, -1, 0, // Index: 151
        -1.6, 1, 1, 1, 0, 0, 0, -1, 0, // Index: 152
        -2.9, 1, 1, 01, 0, 0, 0, -1, 0, // Index: 153
        -2.9, 1, 0.5, 1, 0, 0, 0, -1, 0, // Index: 154

        //right-front
        -2.9, 1, 1, 1, 0.5, 0, 0, 1, 0, // Index: 155
        -2.9, -1.5, 1, 1, 0.5, 0, 0, 1, 0, // Index: 156
        -2.5, -1.5, 1, 1, 0.5, 0, 0, 1, 0, // Index: 157
        -2.5, 1, 1, 1, 0.5, 0, 0, 1, 0, // Index: 158
        //right-back 
        -2.9, 1, 0.5, 1, 1, 0, 0, 1, 0, // Index: 159
        -2.9, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 160
        -2.5, -1.5, 0.5, 1, 1, 0, 0, 1, 0, // Index: 161
        -2.5, 1, 0.5, 1, 1, 0, 0, 1, 0, // Index: 162
        // //right-right
        // -3, -1.5, 1, 1, 1, 1, 1, 0, 0, // Index: 163
        // -3, -1, 1, 1, 1, 1, 1, 0, 0, // Index: 164
        // -3, -1, 0.5, 1, 1, 1, 1, 0, 0, // Index: 165
        // -3, -1.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 166
        //right-right2
        -2.9, 1, 1, 1, 1, 1, 1, 0, 0, // Index: 167
        -2.9, -1.5, 1, 1, 1, 1, 1, 0, 0, // Index: 168
        -2.9, -1.5, 0.5, 1, 1, 1, 1, 0, 0, // Index: 169
        -2.9, 1, 0.5, 1, 1, 1, 1, 0, 0, // Index: 170
        //right-left 
        -2.5, 1, 1, 0, 0, 1, 1, 0, 0, // Index: 171
        -2.5, -1.5, 1, 0, 0, 1, 1, 0, 0, // Index: 172
        -2.5, -1.5, 0.5, 0, 0, 1, 1, 0, 0, // Index: 173
        -2.5, 1, 0.5, 0, 0, 1, 1, 0, 0, // Index: 174

        //alphabet A
        //left
        //left-front //red
        1, -3, -0.5, 1, 0, 0, 0, 0, 1, // Index:  175   
        1, -0.5, -0.5, 1, 0, 0, 0, 0, 1, // Index:  176
        1.5, -0.5, -0.5, 1, 0, 0, 0, 0, 1, // Index:  177
        1.5, -3, -0.5, 1, 0, 0, 0, 0, 1, // Index:  178
        //left-back     //orange
        1, -3, -1, 1, 0.5, 0, 0, 0, 1, // Index:  179
        1, -0.5, -1, 1, 0.5, 0, 0, 0, 1, // Index:  180
        1.5, -0.5, -1, 1, 0.5, 0, 0, 0, 1, // Index: 181
        1.5, -3, -1, 1, 0.5, 0, 0, 0, 1, // Index:  182
        //left-left //yellow
        1, -3, -1, 1, 1, 0, 1, 0, 0, // Index: 183
        1, -0.5, -1, 1, 1, 0, 1, 0, 0, // Index: 184
        1, -0.5, -0.5, 1, 1, 0, 1, 0, 0, // Index: 185
        1, -3, -0.5, 1, 1, 0, 1, 0, 0, // Index: 186
        //left-right //green
        1.5, -3, -1, 0, 1, 0, 1, 0, 0, // Index: 187
        1.5, -0.5, -1, 0, 1, 0, 1, 0, 0, // Index: 188
        1.5, -0.5, -0.5, 0, 1, 0, 1, 0, 0, // Index: 189
        1.5, -3, -0.5, 0, 1, 0, 1, 0, 0, // Index: 190
        //left-bottom      //white
        1.5, -3, -1, 0, 0, 1, 0, -1, 0, // Index: 191
        1.5, -3, -0.5, 0, 0, 1, 0, -1, 0, // Index: 192
        1, -3, -0.5, 0, 0, 1, 0, -1, 0, // Index: 193
        1, -3, -1, 0, 0, 1, 0, -1, 0, // Index: 194
        //left-top      //blue
        1.5, -0.5, -1, 1, 1, 1, 0, -1, 0, // Index: 195
        1.5, -0.5, -0.5, 1, 1, 1, 0, -1, 0, // Index: 196
        1, -0.5, -0.5, 1, 1, 1, 0, -1, 0, // Index: 197
        1, -0.5, -1, 1, 1, 1, 0, -1, 0, // Index: 198

        //right
        //right-front   //red
        2.7, -3, -0.5, 1, 0, 0, 0, 0, 1, // Index:  199    
        2.7, -0.5, -0.5, 1, 0, 0, 0, 0, 1, // Index:  200
        2.2, -0.5, -0.5, 1, 0, 0, 0, 0, 1, // Index:  201
        2.2, -3, -0.5, 1, 0, 0, 0, 0, 1, // Index:  202
        //right-back //orange
        2.7, -3, -1, 1, 0.5, 0, 0, 0, 1, // Index:  203  
        2.7, -0.5, -1, 01, 0.5, 0, 0, 0, 1, // Index:  204
        2.2, -0.5, -1, 1, 0.5, 0, 0, 0, 1, // Index:  205
        2.2, -3, -1, 1, 0.5, 0, 0, 0, 1, // Index:  206
        //right-left //yellow
        2.7, -3, -1, 1, 1, 0, 1, 0, 0, // Index: 207
        2.7, -0.5, -1, 1, 1, 0, 1, 0, 0, // Index: 208
        2.7, -0.5, -0.5, 1, 1, 0, 1, 0, 0, // Index: 209
        2.7, -3, -0.5, 1, 1, 0, 1, 0, 0, // Index: 210
        //right-right //green
        2.2, -3, -1, 0, 1, 0, 1, 0, 0, // Index: 211
        2.2, -0.5, -1, 0, 1, 0, 1, 0, 0, // Index: 212
        2.2, -0.5, -0.5, 0, 1, 0, 1, 0, 0, // Index: 213
        2.2, -3, -0.5, 0, 1, 0, 1, 0, 0, // Index: 214
        //right-bottom      //white
        2.7, -3, -1, 0, 0, 1, 0, -1, 0, // Index: 215
        2.7, -3, -0.5, 0, 0, 1, 0, -1, 0, // Index: 216
        2.2, -3, -0.5, 0, 0, 1, 0, -1, 0, // Index: 217
        2.2, -3, -1, 0, 0, 1, 0, -1, 0, // Index: 218
        //right-top      //blue
        2.2, -0.5, -1, 1, 1, 1, 0, -1, 0, // Index: 219
        2.2, -0.5, -0.5, 1, 1, 1, 0, -1, 0, // Index: 220
        2.7, -0.5, -0.5, 1, 1, 1, 0, -1, 0, // Index: 221
        2.7, -0.5, -1, 1, 1, 1, 0, -1, 0, // Index: 222

        //top
        //top-front          //red
        2.2, -3, -0.5, 1, 0, 0, 0, 0, -1, // Index:  223
        2.2, -2.4, -0.5, 1, 0, 0, 0, 0, -1, //Index:  224
        1.5, -2.4, -0.5, 1, 0, 0, 0, 0, -1, // Index:  225
        1.5, -3, -0.5, 1, 0, 0, 0, 0, -1, // Index:  226
        //top-back           //orange
        2.2, -3, -1, 1, 0.5, 0, 0, 0, 1, // Index:  227
        2.2, -2.4, -1, 1, 0.5, 0, 0, 0, 1, // Index:  228
        1.5, -2.4, -1, 1, 0.5, 0, 0, 0, 1, // Index:  229
        1.5, -3, -1, 1, 0.5, 0, 0, 0, 1, // Index:  230
        //top-top      //blue
        1.5, -3, -0.5, 0, 0, 1, 0, -1, 0, // Index: 231
        1.5, -3, -1, 0, 0, 1, 0, -1, 0, // Index: 232
        2.2, -3, -1, 0, 0, 1, 0, -1, 0, // Index: 233
        2.2, -3, -0.5, 0, 0, 1, 0, -1, 0, // Index: 234
        //top-bottom        //white
        1.5, -2.4, -0.5, 1, 1, 1, 0, -1, 0, // Index: 235
        1.5, -2.4, -1, 1, 1, 1, 0, -1, 0, // Index: 236
        2.2, -2.4, -1, 1, 1, 1, 0, -1, 0, // Index: 237
        2.2, -2.4, -0.5, 1, 1, 1, 0, -1, 0, // Index: 238

        //middle
        //middle-front          //red
        2.2, -2, -0.5, 1, 0, 0, 0, 0, -1, // Index:  239
        2.2, -1.5, -0.5, 1, 0, 0, 0, 0, -1, //Index:  240
        1.5, -1.5, -0.5, 1, 0, 0, 0, 0, -1, // Index:  241
        1.5, -2, -0.5, 1, 0, 0, 0, 0, -1, // Index:  242
        //middle-back           //orange
        2.2, -2, -1, 1, 0.5, 0, 0, 0, 1, // Index:  243
        2.2, -1.5, -1, 1, 0.5, 0, 0, 0, 1, // Index:  244
        1.5, -1.5, -1, 1, 0.5, 0, 0, 0, 1, // Index:  245
        1.5, -2, -1, 1, 0.5, 0, 0, 0, 1, // Index:  246
        //middle-top      //blue
        2.2, -2, -0.5, 0, 0, 1, 0, -1, 0, // Index: 247
        2.2, -2, -1, 0, 0, 1, 0, -1, 0, // Index: 248
        1.5, -2, -1, 0, 0, 1, 0, -1, 0, // Index: 249
        1.5, -2, -0.5, 0, 0, 1, 0, -1, 0, // Index: 250
        //middle-bottom        //white
        2.2, -1.5, -0.5, 1, 1, 1, 0, -1, 0, // Index: 251
        2.2, -1.5, -1, 1, 1, 1, 0, -1, 0, // Index: 252
        1.5, -1.5, -1, 1, 1, 1, 0, -1, 0, // Index: 253
        1.5, -1.5, -0.5, 1, 1, 1, 0, -1, 0, // Index: 254

        //alphabet K
        //left-front //yellow
        2.2, 3, -0.5, 1, 1, 0, 0, 0, 1, // Index:  255
        2.2, 0.5, -0.5, 1, 1, 0, 0, 0, 1, // Index:  256
        2.7, 0.5, -0.5, 1, 1, 0, 0, 0, 1, // Index: 257
        2.7, 3, -0.5, 1, 1, 0, 0, 0, 1, // Index:  258
        //left-back //blue
        2.2, 3, -1, 0, 0, 1, 0, 0, 1, // Index:  259
        2.2, 0.5, -1, 0, 0, 1, 0, 0, 1, // Index:  260
        2.7, 0.5, -1, 0, 0, 1, 0, 0, 1, // Index:  261
        2.7, 3, -1, 0, 0, 1, 0, 0, 1, // Index:  262
        //left-left //red
        2.2, 3, -1, 1, 0, 0, 1, 0, 0, // Index: 263
        2.2, 0.5, -1, 1, 0, 0, 1, 0, 0, // Index: 264
        2.2, 0.5, -0.5, 1, 0, 0, 1, 0, 0, // Index: 265
        2.2, 3, -0.5, 1, 0, 0, 1, 0, 0, // Index: 266
        //left-right 
        2.7, 3, -1, 1, 1, 1, 1, 0, 0, // Index: 267
        2.7, 0.5, -1, 1, 1, 1, 1, 0, 0, // Index: 268
        2.7, 0.5, -0.5, 1, 1, 1, 1, 0, 0, // Index: 269
        2.7, 3, -0.5, 1, 1, 1, 1, 0, 0, // Index: 270
        //top-top     //green
        2.2, 3, -1, 1, 0.5, 0, 0, -1, 0, // Index: 271
        2.2, 3, -0.5, 1, 0.5, 0, 0, -1, 0, // Index: 272
        2.7, 3, -0.5, 1, 0.5, 0, 0, -1, 0, // Index: 273
        2.7, 3, -1, 1, 0.5, 0, 0, -1, 0, // Index: 274
        //top-bottom      //green
        2.2, 0.5, -1, 0, 1, 0, 0, -1, 0, // Index: 275
        2.2, 0.5, -0.5, 0, 1, 0, 0, -1, 0, // Index: 276
        2.7, 0.5, -0.5, 0, 1, 0, 0, -1, 0, // Index: 277
        2.7, 0.5, -1, 0, 1, 0, 0, -1, 0, // Index: 278

        //k-right
        //middle up
        //up-front          //yellow
        2.2, 2, -0.5, 1, 1, 0, 0, 0, -1, // Index:  279
        2.2, 1.4, -0.5, 1, 1, 0, 0, 0, -1, //Index:  280
        1, 0, -0.5, 1, 1, 0, 0, 0, -1, // Index:  281
        1, 0.6, -0.5, 1, 1, 0, 0, 0, -1, // Index:  282
        //up-back           //blue
        2.2, 2, -1, 0, 0, 1, 0, 0, 1, // Index:  283
        2.2, 1.4, -1, 0, 0, 1, 0, 0, 1, // Index:  284
        1, 0, -1, 0, 0, 1, 0, 0, 1, // Index:  285
        1, 0.6, -1, 0, 0, 1, 0, 0, 1, // Index:  286
        //up-top      //red
        1, 0, -0.5, 1, 0, 0, 0, -1, 0, // Index: 287
        1, 0, -1, 1, 0, 0, 0, -1, 0, // Index: 288
        2.2, 1.4, -1, 1, 0, 0, 0, -1, 0, // Index: 289
        2.2, 1.4, -0.5, 1, 0, 0, 0, -1, 0, // Index: 290
        //up-bottom        //green
        1, 0.6, -0.5, 0, 1, 0, 0, -1, 0, // Index: 291
        1, 0.6, -1, 0, 1, 0, 0, -1, 0, // Index: 292
        2.2, 2, -1, 0, 1, 0, 0, -1, 0, // Index: 293
        2.2, 2, -0.5, 0, 1, 0, 0, -1, 0, // Index: 294
        //upright 
        1, 0.6, -1, 1, 1, 1, 1, 0, 0, // Index: 295
        1, 0, -1, 1, 1, 1, 1, 0, 0, // Index: 296
        1, 0, -0.5, 1, 1, 1, 1, 0, 0, // Index: 297
        1, 0.6, -0.5, 1, 1, 1, 1, 0, 0, // Index: 298

        //k-down
        //middle
        //down-front          //yellow
        2.7, 2, -0.5, 1, 1, 0, 0, 0, -1, // Index:  299
        2.7, 1.4, -0.5, 1, 1, 0, 0, 0, -1, //Index:  300
        1, 2.4, -0.5, 1, 1, 0, 0, 0, -1, // Index:  301
        1, 3, -0.5, 1, 1, 0, 0, 0, -1, // Index:  302
        //down-back           //blue
        2.7, 2, -1, 0, 0, 1, 0, 0, 1, // Index:  303
        2.7, 1.4, -1, 0, 0, 1, 0, 0, 1, // Index:  304
        1, 2.4, -1, 0, 0, 1, 0, 0, 1, // Index:  305
        1, 3, -1, 0, 0, 1, 0, 0, 1, // Index:  306
        //down-top      //red
        1, 2.4, -0.5, 1, 0, 0, 0, -1, 0, // Index: 307
        1, 2.4, -1, 1, 0, 0, 0, -1, 0, // Index: 308
        2.7, 1.4, -1, 1, 0, 0, 0, -1, 0, // Index: 309
        2.7, 1.4, -0.5, 1, 0, 0, 0, -1, 0, // Index: 310
        //down-bottom        //green
        1, 3, -0.5, 0, 1, 0, 0, -1, 0, // Index: 311
        1, 3, -1, 0, 1, 0, 0, -1, 0, // Index: 312
        2.7, 2, -1, 0, 1, 0, 0, -1, 0, // Index: 313
        2.7, 2, -0.5, 0, 1, 0, 0, -1, 0, // Index: 314
        //downright  //white
        1, 2.4, -1, 1, 1, 1, 1, 0, 0, // Index: 315
        1, 3, -1, 1, 1, 1, 1, 0, 0, // Index: 316
        1, 3, -0.5, 1, 1, 1, 1, 0, 0, // Index:317
        1, 2.4, -0.5, 1, 1, 1, 1, 0, 0, // Index: 318

        //Upper cube
        -0.5, 0.8, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.8, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.8, -0, 1, 1, 1, 0, 0, 1, -0.5, 0.8, -0, 1, 1, 1, 0, 0, 1,
        //Lower cube
        -0.5, 0.5, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.5, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.5, -0, 1, 1, 1, 0, 0, 1, -0.5, 0.5, -0, 1, 1, 1, 0, 0, 1,
        //Right cube
        -0.5, 0.5, -1, 1, 1, 1, 0, 0, 1, -0.5, 0.8, -1, 1, 1, 1, 0, 0, 1, -0.5, 0.8, -0, 1, 1, 1, 0, 0, 1, -0.5, 0.5, -0, 1, 1, 1, 0, 0, 1,
        //Left cube
        0.0, 0.5, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.8, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.8, -0, 1, 1, 1, 0, 0, 1,
        0.0, 0.5, -0, 1, 1, 1, 0, 0, 1,
        //Back cube
        -0.5, 0.8, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.8, -1, 1, 1, 1, 0, 0, 1,
        0.0, 0.5, -1, 1, 1, 1, 0, 0, 1, -0.5, 0.5, -1, 1, 1, 1, 0, 0, 1,
        //Front cube
        -0.5, 0.8, -0, 1, 1, 1, 0, 0, 1,
        0.0, 0.8, -0, 1, 1, 1, 0, 0, 1,
        0.0, 0.5, -0, 1, 1, 1, 0, 0, 1, -0.5, 0.5, -0, 1, 1, 1, 0, 0, 1,


    ];
    var indices = [
        0, 1, 2, 0, 2, 3, // rectangle 1
        4, 5, 6, 4, 6, 7, // rectangle 2
        8, 9, 10, 8, 10, 11, // rectangle 3
        12, 13, 14, 12, 14, 15, // rectangle 4
        16, 17, 18, 16, 18, 19, // rectangle 5
        20, 21, 22, 20, 22, 23, // rectangle 6    
        24, 25, 26, 24, 26, 27, // rectangle 7
        28, 29, 30, 28, 30, 31, // rectangle 8
        32, 33, 34, 32, 34, 35, // rectangle 9
        36, 37, 38, 36, 38, 39, //rectangle 10 
        40, 41, 42, 40, 42, 43, //rectangle 11
        44, 45, 46, 44, 46, 47, //rectangle 12
        48, 49, 50, 48, 50, 51, //rectangle 13
        52, 53, 54, 52, 54, 55, //rectangle 14
        56, 57, 58, 56, 58, 59, //rectangle 15
        60, 61, 62, 60, 62, 63, //rectangle 16
        64, 65, 66, 64, 66, 67, //rectangle 17
        68, 69, 70, 68, 70, 71, //rectangle 18
        72, 73, 74, 72, 74, 75, //rectangle 19 
        76, 77, 78, 76, 78, 79, //rectangle 20 
        80, 81, 82, 80, 82, 83, //rectangle 21
        84, 85, 86, 84, 86, 87, //rectangle 22
        88, 89, 90, 88, 90, 91, //rectangle 23
        92, 93, 94, 92, 94, 95, //rectangle 24
        96, 97, 98, 96, 98, 99, //rectangle 25
        100, 101, 102, 100, 102, 103,
        104, 105, 106, 104, 106, 107,
        108, 109, 110, 108, 110, 111,
        112, 113, 114, 112, 114, 115,
        116, 117, 118, 116, 118, 119,
        120, 121, 122, 120, 122, 123,
        124, 125, 126, 124, 126, 127,
        128, 129, 130, 128, 130, 131,
        132, 133, 134, 132, 134, 135,
        136, 137, 138, 136, 138, 139,
        140, 141, 142, 140, 142, 143,
        144, 145, 146, 144, 146, 147,
        148, 149, 150, 148, 150, 151,
        152, 153, 154, 152, 154, 155,
        156, 157, 158, 156, 158, 159,
        160, 161, 162, 160, 162, 163,
        164, 165, 166, 164, 166, 167,
        168, 169, 170, 168, 170, 171,
        172, 173, 174, 172, 174, 175,
        176, 177, 178, 176, 178, 179,
        180, 181, 182, 180, 182, 183,
        184, 185, 186, 184, 186, 187,
        188, 189, 190, 188, 190, 191,
        192, 193, 194, 192, 194, 195,
        196, 197, 198, 196, 198, 199,
        200, 201, 202, 200, 202, 203,
        204, 205, 206, 204, 206, 207,
        208, 209, 210, 208, 210, 211,
        212, 213, 214, 212, 214, 215,
        216, 217, 218, 216, 218, 219,
        220, 221, 222, 220, 222, 223,
        224, 225, 226, 224, 226, 227,
        228, 229, 230, 228, 230, 231,
        232, 233, 234, 232, 234, 235,
        236, 237, 238, 236, 238, 239,
        240, 241, 242, 240, 242, 243,
        244, 245, 246, 244, 246, 247,
        248, 249, 250, 248, 250, 251,
        252, 253, 254, 252, 254, 255,
        256, 257, 258, 256, 258, 259,
        260, 261, 262, 260, 262, 263,
        264, 265, 266, 264, 266, 267,
        268, 269, 270, 268, 270, 271,
        272, 273, 274, 272, 274, 275,
        276, 277, 278, 276, 278, 279,
        280, 281, 282, 280, 282, 283,
        284, 285, 286, 284, 286, 287,
        288, 289, 290, 288, 290, 291,
        292, 293, 294, 292, 294, 295,
        296, 297, 298, 296, 298, 299,
        300, 301, 302, 300, 302, 303,
        304, 305, 306, 304, 306, 307,
        308, 309, 310, 308, 310, 311,
        312, 313, 314, 312, 314, 315,
        316, 317, 318, 316, 318, 319,
        320, 321, 322, 320, 322, 323,
        324, 325, 326, 324, 326, 327,
        328, 329, 330, 328, 330, 331,
        332, 333, 334, 332, 334, 335,
        336, 337, 338, 336, 338, 339,
        340, 341, 342, 340, 342, 343,
        344, 345, 346, 344, 346, 347,
        348, 349, 350, 348, 350, 351,
        352, 353, 354, 352, 354, 355,
        356, 357, 358, 356, 358, 359,
        360, 361, 362, 360, 362, 363,
        364, 365, 366, 364, 366, 367,
        368, 369, 370, 368, 370, 371,
        372, 373, 374, 372, 374, 375,
        376, 377, 378, 376, 378, 379,
        380, 381, 382, 380, 382, 383,
        384, 385, 386, 384, 386, 387,
        388, 389, 390, 388, 390, 391,
        392, 393, 394, 392, 394, 395,
        396, 397, 398, 396, 398, 39





    ];
    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // For the camera
    var camera = [0.0, 0.0, 7.5];
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create(); // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        ((Math.PI / 2) - 15), // 75 degrees
        1.0,
        0.5,
        50.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);
    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]); // white color
    gl.uniform1f(uAmbientIntensity, 0.430); // 40% intensity
    // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [0.5, 0.5, 0.5]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
    // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");
    // Local functions
    // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();

    function onMouseDown(event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }

    function onMouseUp(event) {
        dragging = false;
    }

    function onMouseMove(event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    // KEYBOARD
    function onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }

    function onKeyUp(event) {
        direction = "";
    }

    function onKeyPress(event) {
        stsole.log('keypress');
        if (event.keyCode == 32) { // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.67, 0.80, 0.67, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.01;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);
        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length,
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}