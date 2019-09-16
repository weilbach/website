from setuptools import setup

setup(
    name='src',
    version='1.0.0',
    packages=['src'],
    include_package_data=True,
    install_requires=[
        'Flask==1.0.2',
        'nodeenv==1.3.3',
        'gunicorn==19.9.0'
    ]
)