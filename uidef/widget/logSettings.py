# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'g:\Work\Code\leafyy\uisrc\widget\logSettings.ui'
#
# Created by: PySide6 UI code generator 5.15.2
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PySide6 import QtCore, QtGui, QtWidgets


class Ui_LogWindowSettingsWidget(object):
    def setupUi(self, LogWindowSettingsWidget):
        LogWindowSettingsWidget.setObjectName("LogWindowSettingsWidget")
        LogWindowSettingsWidget.resize(400, 48)
        LogWindowSettingsWidget.setMinimumSize(QtCore.QSize(400, 48))
        self.verticalLayout = QtWidgets.QVBoxLayout(LogWindowSettingsWidget)
        self.verticalLayout.setObjectName("verticalLayout")
        self.horizontalLayout = QtWidgets.QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.label = QtWidgets.QLabel(LogWindowSettingsWidget)
        self.label.setObjectName("label")
        self.horizontalLayout.addWidget(self.label)
        self.fontComboBox = QtWidgets.QFontComboBox(LogWindowSettingsWidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Preferred, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.fontComboBox.sizePolicy().hasHeightForWidth())
        self.fontComboBox.setSizePolicy(sizePolicy)
        self.fontComboBox.setObjectName("fontComboBox")
        self.horizontalLayout.addWidget(self.fontComboBox)
        self.spinBox = QtWidgets.QSpinBox(LogWindowSettingsWidget)
        self.spinBox.setMinimum(8)
        self.spinBox.setObjectName("spinBox")
        self.horizontalLayout.addWidget(self.spinBox)
        self.verticalLayout.addLayout(self.horizontalLayout)

        self.retranslateUi(LogWindowSettingsWidget)
        QtCore.QMetaObject.connectSlotsByName(LogWindowSettingsWidget)

    def retranslateUi(self, LogWindowSettingsWidget):
        _translate = QtCore.QCoreApplication.translate
        LogWindowSettingsWidget.setWindowTitle(_translate("LogWindowSettingsWidget", "Form"))
        self.label.setText(_translate("LogWindowSettingsWidget", "Шрифт:"))
        self.spinBox.setSuffix(_translate("LogWindowSettingsWidget", " пт"))
